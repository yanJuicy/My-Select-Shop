let targetId;
$(document).ready(function () {
// id   query 인 녀       터를  르면 execSearch() 함 를   하라  뜻   .
    $('#query').on('keypress', function (e) {
        if (e.key == 'Enter') {
            execSearch();
        }
    });
    $('#close').on('click', function () {
        $('#container').removeClass('active');
    })
    $('.nav div.nav-see').on('click', function () {
        $('div.nav-see').addClass('active');
        $('div.nav-search').removeClass('active');
        $('#see-area').show();
        $('#search-area').hide();
    })
    $('.nav div.nav-search').on('click', function () {
        $('div.nav-see').removeClass('active');
        $('div.nav-search').addClass('active');
        $('#see-area').hide();
        $('#search-area').show();
    })
    $('#see-area').show();
    $('#search-area').hide();
    showProduct();
})
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//////////////////////////////////////////////////////////////////////////////////////////
/////  기 아    터 코 를  성합  . ////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
function execSearch() {
    /**
     *     input id: query
     *       록: #search-result-box
     *      HTML     함 : addHTML
     */
// 1.   창의  력 을  져온 .
// 2.   창  력 을   하 ,  력하  않았을    focus.
// 3. GET /api/search?query=${query}   
// 4. for 문   itemDto를     HTML           록   이기!
}
function addHTML(itemDto) {
    /**
     * class="search-itemDto" 인 녀   
     * image, title, lprice, addProduct 활 하기
     * 참 ) onclick='addProduct(${JSON.stringify(itemDto)})'
     */
    return ``
}
function addProduct(itemDto) {
    /**
     * modal 뜨  하   : $('#container').addClass('active');
     * data를 ajax로   할 때  두          
     * 1. contentType: "application/json",
     * 2. data: JSON.stringify(itemDto),
     */
// 1. POST /api/products          성   
// 2. 응  함    modal을 뜨  하 , targetId 를 reponse.id 로 설  (  로 myprice 설 하기  함)
}
function showProduct() {
/**
 *       록: #product-container
 *       록: #search-result-box
 *      HTML     함 : addProductItem
 */
// 1. GET /api/products   
// 2.       록,       록 비 기
// 3. for 문         HTML            록   이기!
}
function addProductItem(product) {
// link, image, title, lprice, myprice    활 하기
    return ``;
}
function setMyprice() {
    /**
     *   ! myprice   설 하기.
     * 1. id  myprice 인 input       을  져온 .
     * 2.  약  을  력하  않았으면 alert를 띄     한 .
     * 3. PUT /api/product/${targetId}   data를   한 .
     *  의) contentType: "application/json",
     * data: JSON.stringify({myprice: myprice}),
     * 빠뜨      !
     * 4.   을   한 . $('#container').removeClass('active');
     * 5, 성  으로  록  음을 알   alert를 띄  .
     * 6. 창을  로 침한 . window.location.reload();
     */
}