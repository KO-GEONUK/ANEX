const quotes = [
    {
        quote: "We have two ears and one mouth so that we can listen twice as much as we speak.\n我々には耳が二つ、口が一つあるが、それでしゃべることより二倍聞くことができる。\n우리에게는 귀가 두 개, 입이 하나 있는데 그래서 말하는 것의 두 배로 들을 수 있다.",
        author: "- 에펙테토스 Epictetus",
    },
    {
        quote: "As soon as you trust yourself, you will know how to live.\n自分を信じるやすぐ に 、どのように生きるべきかわかるであろう。\n스스로를 신뢰하는 순간, 삶을 살아갈 방법을 알게 된다.",
        author: "- 요한 볼프강 폰 괴테 Johann Wolfgang von Goethe",
    },
    {
        quote: "The best way to predict the future is to invent it.\n未来を予測する最良の方法は、それを創ることである。\n미래를 예측하는 최선의 방법은 미래를 창조하는 것이다.",
        author: "- 알랜 케이. Alan Kay",
    },
    {
        quote: "In giving advice, seek to help, not to please, your friend.\n親友に忠告する時は、彼を楽しませるためではなく、助けるためにせよ。\n친구에게 충고할 때는 즐겁게 하지 말고, 도움이 되도록 하라.",
        author: "- 솔론 Solon",
    },
    {
        quote: "Regret for wasted time is more wasted time.\n時間を無駄にしたことを後悔するのは、最もの時間の無駄だ。\n시간을 낭비한 것에 대한 후회는 더 큰 시간낭비다.",
        author: "- 메이슨 쿨리 Mason Cooley",
    },
    {
        quote: "Our greatest weakness lies in giving up.\nThe most certain way to succeed is always to try just one more time.\n私たちの最大の弱点はあきらめることにある。成功するための最も確実な方法は常にただもう一度挑戦することである。\n우리의 최대의 약점은 포기다. 성공으로 가는 가장 확실한 방법은 언제든지 한번 더 시도해보는 것이다.",
        author: "- 토마스 에디슨 Thomas Edison",
    },
    {
        quote: "Concentration comes out of a combination of confidence and hunger.\n集中力は、自信と渇望の結合から生じる。\n집중력은 자신감과 갈망이 결합하여 생긴다.",
        author: "- 아놀드 파머 Arnold Palmer",
    },
    {
        quote: "Nothing is impossible, the word itself says 「I'm possible」.\n不可能などない。『不可能』という言葉自体が、「私は、可能」って言っている。\n불가능은 없다, 단어 자체가 말해주듯 「나는 할 수 있다」 ",
        author: "- 오드리 햅번 Audrey Hepburn",
    },
    {
        quote: "Only the person who has faith in himself is able to be faithful to others.\n自分自身を信じている者だけが、他人にたいして誠実になれる。\n스스로를 신뢰하는 사람만이 다른 사람들에게 성실할 수 있다.",
        author: "- 에리히 프롬 Erich Fromm",
    },
    {
        quote: "Anything you're good at contributes to happiness.\nそれが何であれ、あなたの得意なことが幸福に役に立つ。\n당신이 잘 하는 일이라면 무엇이나 행복에 도움이 된다.",
        author: "- 버트랜드 러셀 Bertrand Russell",
    },
    {
        quote: "Tray not to bemome a man of success but rather a man of value.\n成功者になろうとせず、価値のある人になろうとせよ。\n성공한 사람이 아니라 가치 있는 사람이 되기 위해 노력하십시오.",
        author: "- 알버트 아인슈타인 Albert Einstein ",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
