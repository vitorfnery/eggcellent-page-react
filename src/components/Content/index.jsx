import { MENU } from "@/constants/content";

const Content = () => {
  const items = MENU;
  return (
    <>
      {items.map(({ img, title, description, price }, index) => (
        <div
          className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40"
          key={index}
        >
          <img src={img} alt="egg" className="h-full rounded mb-20 shadow" />
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl mb-2">{title}</h2>
            <p className="mb-2">{description}</p>
            <span>{price}</span>
          </div>
        </div>
      ))}
    </>
  );
};
export default Content;
