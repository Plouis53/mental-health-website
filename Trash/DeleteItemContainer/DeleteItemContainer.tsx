// "use client";

// import React, { useState } from "react";
// import ConfirmDeleteModal from "@/components/ConfirmDeleteModal/ConfirmDeleteModal";
// import PostItemOne from "@/components/PostItemOne/PostItemOne";
// import { PostProps } from "@/sections/Post/Posts";

// export default function DeleteItemContainer({ items }: { items: PostProps[] }) {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedItem, setSelectedItem] = useState<PostProps | null>(null);

//   // Function to open the modal and set the selected item to delete
//   const handleDeleteClick = (item: PostProps) => {
//     setSelectedItem(item);
//     setShowModal(true);
//   };

//   // Function to close the modal
//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedItem(null);
//   };

//   // Function to delete the selected item
//   const handleDelete = () => {
//     if (selectedItem) {
//       console.log(`Deleting item with id: ${selectedItem._id}`);
//       // Perform delete logic here (e.g., API call to delete the item)
//       setShowModal(false);
//     }
//   };

//   return (
//     <>
//       {items && items.length > 0 ? (
//         items.map((item) => (
//           <PostItemOne
//             key={item._id}
//             large={false}
//             item={item}
//             handleDeleteClick={() => handleDeleteClick(item)}
//           />
//         ))
//       ) : (
//         <p>No items available</p>
//       )}
//       <ConfirmDeleteModal
//         show={showModal}
//         handleCloseModal={handleCloseModal}
//         handleDelete={handleDelete}
//       />
//     </>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import ConfirmDeleteModal from "@/components/ConfirmDeleteModal/ConfirmDeleteModal";
// import { Button } from "react-bootstrap";

// const DeleteItemContainer: React.FC = () => {
//   const [showModal, setShowModal] = useState<boolean>(false);

//   // Function to handle opening the modal
//   const handleOpenModal = () => setShowModal(true);

//   // Function to handle closing the modal
//   const handleCloseModal = () => setShowModal(false);

//   // Function to handle the delete action
//   const handleDelete = () => {
//     console.log("Item deleted");
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <Button variant="danger" onClick={handleOpenModal}>
//         Delete Item
//       </Button>
//       <ConfirmDeleteModal
//         show={showModal}
//         handleCloseModal={handleCloseModal}
//         handleDelete={handleDelete}
//       />
//     </div>
//   );
// };

// export default DeleteItemContainer;
