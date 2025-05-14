// import s from "./LoadMoreBtn.module.css";
// const LoadMoreBtn = ({ handleLoadMore }) => {
//   return (
//     <button className={s.btn} onClick={handleLoadMore}>
//       Load more
//     </button>
//   );
// };
// export default LoadMoreBtn;
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return (
    <button className={s.btn} onClick={handleLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
