//21.08.10 랜덤 명언 출력
const quotes=[ //명언과 이름
{
    quote: "시간은 아무도 기다려주지 않아", 
    quthor: "시간을 달리는 소녀"
}, 
{
    quote: "그들이 할 수 있으면 우리도 할 수 있다", 
    quthor: " "
}, 
{
    quote: "세상은 넓고 할 일은 많다.\n용기를 가지자!!!", 
    quthor: " "
}, 
{
    quote: "서로 부딪치며 성장하는구나 ", 
    quthor: "4월은 너의 거짓말"
}, 
{
    quote: "남자는 일단 행동부터!", 
    quthor: "4월은 너의 거짓말"
}, 
{
    quote: "실패를 두려워하다가 실패한다", 
    quthor: "너와 사는,그집"
}, 
{
    quote: "1.01×1.01×1.01×1.01×ㆍㆍㆍ×=무한", 
    quthor: "수능특강 미적분"
}, 
{
    quote: "그 모든 실패를 '좋은 경험'이었다고 생각할 수 있는 날이 언젠가 찾아올 거야", 
    quthor: "리라이프"
}, 
{
    quote: "모두가 날 싫어하는 마음을 부정할 생각은 없지만,\n그 대신 나도 내가 좋아하는 나로 있고 싶어", 
    quthor: "아오하라이드"
}, 
{
    quote: "세상이 칠흑같이 어두워져서 무한한 그림자에 두려워져도\n눈을 감지 마\n포기하지 마", 
    quthor: "슈타인즈게이트 제로"
}, 
{
    quote: "쓸모없는 사람이 되는 것보다는 잘못된 선택이라도 행동하는 사람이 더 낫다", 
    quthor: "스타크래프트2 천국의 악마들"
}, 
{
    quote: "나 같으면 망할 때 망하더라도 한번 가보겠다.\n그 길을 가보지도 않고 후회하느니 가보고 난 뒤에 해도 늦지 않다고...", 
    quthor: "이랏샤이마세 도쿄"
}, 
{
    quote: "모두에게 피해를 주지말고 멋지게 해내자!", 
    quthor: "케이온!"
}, 
{
    quote: "힘을 내, 해피엔딩을 항해. 달려.", 
    quthor: "미래의 여친님에게 인사를 건네러 간다"
}, 
{
    quote: "삶은 생각하는 대로 굴러간다", 
    quthor: "혼자 잘해주고 상처받지 마라"
}, 
{
    quote: "여러가지 일이 있었고 울고, 서로에게 상처 주고...\n그래도 포기하지 않고 계속 걸어왔기 때문에\n지금 여기 서 있는거야.", 
    quthor: "고백예행연습2 질투의 대답"
}, 
{
    quote: "삶 자체가 공평하지 않기 때문이다.\n그 점을 얼른 깨달을수록 사는것이 조금은 더 수월해질 것이다.", 
    quthor: "침대부터 정리하라 : 모키 마틴 중위"
}, 
{
    quote: "만약 포기한다면 평생 그 일을 후회하면서 살게 될 것이다.\n포기한다고 해서 삶이 수월해지는 일은 절대로 없을 것이다.", 
    quthor: "하이큐!! 3기"
}, 
{
    quote: "알게 된 지금이니까 더더욱\n난 앞을 봐야만 한다고 생각해.", 
    quthor: "아오하라이드"
}, 
{
    quote: "후회의 쓴맛은 무언가를 했다는 증거\n하나하나 맛 보렴", 
    quthor: "타마코 러브스토리"
}, 
{
    quote: "불가능이란 없다. 세상을 바꾸려 하면서 어찌 지구상의 모든 규칙을 다 따르겠는가? ", 
    quthor: "구글의 미래"
}, 
{
    quote: "결점없는 사람이 어디 있나요. 비판하고 멸시하고 욕하기는 쉽죠. 그건 아무라도 할 수 있어요.\n반면에 불완전한 모습 그대로를 이해하고 용인하고 받아들이는 태도는 정말로 높이 살 만 하죠", 
    quthor: "나는 왜 네가 힘들까"
}, 
{
    quote: "과거 스무 살의 내가 현재의 나를 바라본다면 어떨 거 같아요?", 
    quthor: "죽고싶지만 떡볶이는 먹고싶어"
}, 
{
    quote: "아무것도 모르는 이들의 몇 마디 말로 지레짐작하고, 겁먹고, 소중한 것을 포기하지 않기를", 
    quthor: "서로 생긴 모습은 달라도 우리는 모두 친구"
}, 
{
    quote: "물어보는 건 잠깐의 창피\n모르는 건 일생의 창피", 
    quthor: "시로바코"
}, 
{
    quote: "걱정의 70%는 쓸데없는 걱정이야", 
    quthor: "655기 행정병 이준규"
}, 
{
    quote: "인생의 한 시기에 도움이 되지 않았다고 해서 언제나 도움이 되지 않는 것은 아니다", 
    quthor: "우울할땐 뇌과학"
}, 
{
    quote: "주위 시선은 신경 쓰지 마라!", 
    quthor: "카구야님은 고백받고 싶어 2기"
}, 
{
    quote: "집이 부자든 말든. 타고난 재능이 있든 없든 상관없어.\n움직여야 할 때 움직일 수 있는가. 그럴 수 있는 사람은 아무리 진흙투성이라도 아름다워.", 
    quthor: "카구야님은 고백받고 싶어 12권"
}, 
{
    quote: "괜히 남탓하지마. 남을 탓해봤자 해결되는 일은 하나도 없어.\n앞으로 살다보면 부도리한 일도 잔뜩 있겠지만,\n결국은 네 힘으로 직접 해결할 수 밖에 없어.", 
    quthor: "너에게 닿기를"
}, 
{
    quote: "뭐 이래저래 성가시거나 열받는 것도 있겠지만, 하고 싶은 일이 있다면 아무튼 움직여야지.\n그렇지 않으면 아무것도 달라지지 않아.", 
    quthor: "극장판 시로바코"
}, 
{
    quote: "어떤 괴로움이든 조용히 견뎌라\n네가 남자라면\n남자로 태어났다면", 
    quthor: "귀멸의 칼날"
}, 
{
    quote: "문제가 안 풀릴 때는 가만히 앉아서 고민만 할 게 아니라 일단 애를 써봐.\n뭘 어떻게 해야 할지 모를 때도 일단 무작정 애를 쓰다보면\n결국엔 머릿속에서 좋은 아이디어가 떠오를거야", 
    quthor: "신경 끄기 기술"
}, 
{
    quote: "발을 헛디디는 날도 있다. 넘어지는 날도 있다. 울고싶은 날도 있다.\n마음껏 울고, 마음껏 자고, 마음껏 먹은 후\n다시 일어서면 된다", 
    quthor: "학교생활!"
}, 
{
    quote: "부정적으로 생각하면  될 것도 안 된다\n잘 됐을 때를 생각해야지\n일단 부딪쳐 봐라", 
    quthor: "나만이 없는 거리"
}, 
{
    quote: "상대가 작은 초대를 제안한다면\n평소에 적극적인 성격이 아니더라도 그 제안을 한번 받아들여보세요", 
    quthor: "작은 여행, 다녀오겠습니다"
}, 
{
    quote: "마음의 날개로, 너는 어디든 날아갈 수 있어", 
    quthor: "조제, 호랑이 그리고 물고기들"
}, 
{
    quote: "남을 웃게 하려면\n나부터 웃어야 하는 법", 
    quthor: "Vivy -Fluorite Eye’s Song-"
}, 
];
const quote = document.querySelector("#quote span:first-child"); //명언
const author = document.querySelector("#quote span:last-child"); //이름

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `\n-${todaysQuote.quthor}-`;