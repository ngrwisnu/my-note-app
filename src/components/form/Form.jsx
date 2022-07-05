import React from "react";
import Container from "../layout/Container";
import ContentWrapper from "../layout/ContentWrapper";
// Importing icons
import { FaPlus } from "react-icons/fa";

const Form = () => {
  return (
    <section>
      <Container>
        <ContentWrapper className="flex justify-center py-12">
          <form className="w-[384px] h-[359px] shadow-lg flex flex-col p-3 gap-6 rounded-xl">
            <div
              id="title"
              className="flex flex-col gap-1 border-b-2 border-neutral-200 py-1"
            >
              <input
                type="text"
                placeholder="Catatan hari ini ..."
                className="py-2 px-4 focus:outline-none"
              />
              <small className="text-end">0/50</small>
            </div>

            <div id="note">
              <textarea
                name="desc"
                id="desc"
                rows="5"
                placeholder="Deskripsi catatan"
                className="w-full py-2 px-4 resize-none focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex justify-center gap-2 items-center py-2 px-4 rounded-md bg-gradient-to-r from-[#fe8c00] to-[#f83600] font-medium text-neutral-50 shadow-btn active:translate-y-[6px] active:shadow-none active:ring-orange-300 active:ring active:ring-offset-2"
            >
              <FaPlus />
              Tambahkan
            </button>
          </form>
        </ContentWrapper>
      </Container>
    </section>
  );
};

export default Form;
