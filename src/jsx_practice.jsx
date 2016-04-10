var H1WithoutJSX = React.createElement("h1", {className: "heading"}, "Test");
var DivWithH1 = React.createElement(
    "div",
    null,
    // React.createElement("h1", {className: "heading"}, "Test"));
    H1WithoutJSX); // 第三個參數改放前面宣告過的H1WithoutJSX
var NestedElementInJSX = 
    <div>
        <h1 className="heading">Test</h1>
    </div>;
    
var height = 183;
var weight = 80;
var BMI = 
    <div>
        <span>BMI is: {weight / Math.pow(height / 100, 2)}</span>
    </div>
    
var BMICompoment = React.createClass({
    render: function(){
        var height = 183;
        var weight = 80;
        return ( // 多行JSX, 使用(括弧)包住
            <div>
                <span>BMI is: {weight / Math.pow(height / 100, 2)}</span>
            </div>
        );
    }
})
ReactDOM.render(
    // BMI, // 直接使用JSX語法的話, 只能當作變數使用
    <BMICompoment />, // 透過React.createClass建立的元件就可以當成JSX語法的標籤使用, 而不再只是變數 
    document.getElementById("content"));