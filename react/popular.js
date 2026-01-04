
// const popularData = [
//     { id: 1, title: "モヒンガー", price: "¥980", image: "./images/ramen02.png" },
//     { id: 2, title: "シャンカウスエ", price: "¥980", image: "./images/shan-noodle.png" },
//     { id: 3, title: "ビリヤニ", price: "¥1100", image: "./images/dan-pauk.png" },
//     { id: 4, title: "チェーオーシーチェッ", price: "¥1100", image: "./images/ramen03.png" },
//     { id: 5, title: "ココナッツミルクラーメン", price: "¥1100", image: "./images/coconnut-ramen.png" },
//     { id: 6, title: "スパイシー豚リブスープ", price: "¥1200", image: "./images/soup03.png" },
// ];


// const Popular = () => {
//     return React.createElement(
//         "div",
//         { className: "popular__items" },

//         popularData.map((item) => {
//             return React.createElement(
//                 "div",
//                 { className: "popular__post post", key: item.id },

//                 React.createElement("img", {
//                     src: item.image,
//                     alt: item.title,
//                     className: "post__image",
//                 }),


//                 React.createElement(
//                     "div",
//                     { className: "post__content" },
//                     React.createElement("h3", null, item.title),
//                     React.createElement("p", { className: "post__price" }, item.price)
//                 )
//             );
//         })
//     );
// };


// ReactDOM.createRoot(document.querySelector("#popular-root")).render(
//     React.createElement(Popular)
// );
const popularData = [
    { num: 1, title: "モヒンガー", price: "¥980", image: "./images/ramen02.png" },
    { num: 2, title: "シャンカウスエ", price: "¥980", image: "./images/shan-noodle.png" },
    { num: 3, title: "ビリヤニ", price: "¥1100", image: "./images/dan-pauk.png" },
    { num: 4, title: "チェーオーシーチェッ", price: "¥1100", image: "./images/ramen03.png" },
    { num: 5, title: "ココナッツミルクラーメン", price: "¥1100", image: "./images/coconnut-ramen.png" },
    { num: 6, title: "スパイシー豚リブスープ", price: "¥1200", image: "./images/soup03.png" },
];

const Popular = () => {
    return (
        <div className="popular__items">
            {popularData.map((item) => (
                <div className="popular__post post" key={item.num}>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="post__image"
                    />

                    <div className="post__content">
                        <h3>{item.title}</h3>
                        <p className="post__price">{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

ReactDOM.createRoot(document.querySelector("#popular-root")).render(
    <Popular />
);
