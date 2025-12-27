const lunchData = [
    { id: 1, title: "モヒンガー", image: "./images/ramen02.png" },
    { id: 2, title: "シャンカウスエ", image: "./images/shan-noodle.png" },
    { id: 3, title: "ビリヤニ", image: "./images/dan-pauk.png" },
    { id: 4, title: "チェーオーシーチェッ", image: "./images/ramen03.png" },
    { id: 5, title: "ココナッツミルクラーメン", image: "./images/coconnut-ramen.png" },
];

const Lunch = () =>
    React.createElement(
        "div",
        { className: "lunch__items" },
        lunchData.map(item =>
            React.createElement(
                "div",
                { className: "lunch__post post", key: item.id },
                React.createElement("img", {
                    src: item.image,
                    alt: item.title,
                    className: "post__image",
                }),
                React.createElement(
                    "dl",
                    { className: "post__content" },
                    React.createElement("dt", { className: "post__title" }, item.title)
                )
            )
        )
    );

ReactDOM.createRoot(
    document.getElementById("lunch-root")
).render(
    React.createElement(Lunch)
);