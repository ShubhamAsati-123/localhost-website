import Image from "next/image";
import React from "react";
import Modal from "react-modal";
import Link from "next/link";

const HackathonModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div className="z-50">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Hackathon Modal"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg mt-10"
        overlayClassName="fixed inset-0 bg-gray-700 bg-opacity-75"
      >
        <div className="text-center">
          <Link href="/hackiniiitp">
            <div className="mb-4 flex place-content-center">
              <Image
                src="/images/hackathon.jpg"
                alt="Hackathon Poster"
                width={250}
                height={200}
              />
            </div>

            <p className="mb-4">
              Click here to learn more about Hackin IIIT Pune.
            </p>
          </Link>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default HackathonModal;
