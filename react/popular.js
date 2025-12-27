const popularData = [
    { id: 1, title: "モヒンガー", price: "¥980", image: "./images/ramen02.png" },
    { id: 2, title: "シャンカウスエ", price: "¥980", image: "./images/shan-noodle.png" },
    { id: 3, title: "ビリヤニ", price: "¥1100", image: "./images/dan-pauk.png" },
    { id: 4, title: "チェーオーシーチェッ", price: "¥1100", image: "./images/ramen03.png" },
    { id: 5, title: "ココナッツミルクラーメン", price: "¥1100", image: "./images/coconnut-ramen.png" },
    { id: 6, title: "スパイシー豚リブスープ", price: "¥1200", image: "./images/soup03.png" },
];

const Popular = () =>
    React.createElement(
        "div",
        { className: "popular__items" },
        popularData.map(item =>
            React.createElement(
                "div",
                { className: "popular__post post", key: item.id },
                React.createElement("img", {
                    src: item.image,
                    alt: item.title,
                    className: "post__image",
                }),
                React.createElement(
                    "dl",
                    { className: "post__content" },
                    React.createElement("dt", { className: "post__title" }, item.title),
                    React.createElement("dd", { className: "post__text" }, item.price)
                )
            )
        )
    );

ReactDOM.createRoot(
    document.getElementById("popular-root")
).render(
    React.createElement(Popular)
);