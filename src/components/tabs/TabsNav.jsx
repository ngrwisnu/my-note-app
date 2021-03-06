import React from "react";
import Container from "../layout/Container";
import ContentWrapper from "../layout/ContentWrapper";
import { FaSearch } from "react-icons/fa";
import TabButton from "../buttons/TabButton";

const TabsNav = ({
  showNoteHandler,
  tabStatus,
  searchValue,
  searchHandler,
  searchSubmitHandler,
}) => {
  return (
    <section>
      <Container>
        <ContentWrapper className="flex justify-between">
          <div className="flex gap-4">
            <TabButton
              name="recent"
              showNoteHandler={showNoteHandler}
              tabStatus={tabStatus}
            >
              <span>Terbaru</span>
            </TabButton>
            <TabButton
              name="archive"
              showNoteHandler={showNoteHandler}
              tabStatus={tabStatus}
            >
              <span>Arsip</span>
            </TabButton>
          </div>

          <div className="flex w-[320px] items-center justify-center">
            <form
              className="flex w-full gap-4 rounded-md border border-slate-400 pl-3"
              onSubmit={searchSubmitHandler}
            >
              <button>
                <FaSearch className="text-slate-500" />
              </button>
              <input
                type="text"
                placeholder="Cari judul catatan"
                className="py-3 text-slate-500 focus:outline-none"
                value={searchValue}
                onChange={(e) => {
                  searchHandler(e.target.value);
                }}
              />
            </form>
          </div>
        </ContentWrapper>
      </Container>
    </section>
  );
};

export default TabsNav;
