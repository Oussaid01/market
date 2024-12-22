

import React from "react";
import  { useState } from "react";



function Article({products}) {

    return (
        products.map((produit) => 
        {
            const [count, setCount] = useState(produit.stock);
            var clr,stat;
            const disc = () => count > 0 ? setCount(count - 1): setCount(0);
            if (count > 0) {
                clr = "article-state green"
                stat = "En Stock"
                
            
            }
            else {
                clr = "article-state red"
                stat = "Hors Stock"
            }
            return (
            <div className="article">
            <div className="article-name">{produit.name}</div>
        <div className="article-picture">
            <div className="article-img"><img src={produit.url} alt="produitIcon"></img></div>
                <div className="article-stock">x{count}</div>
        </div>
                    <div className={clr}>{stat}</div>
        <div className="article-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam necessitatibus quia fuga rem mollitia? Non error, quasi placeat alias amet aspernatur cum veniam molestiae perferendis excepturi fuga expedita. Possimus, officia.</div>
        <div className="buy-button" onClick={disc}>Buy</div>
            <div className="article-price">{produit.price}</div>
        {produit.children}
    </div>
        )})
        
    )
}

export default Article











/*

function Article(produit) {
    const [count, setCount] = useState(produit.stock);
    var clr;
    const disc = () => { if (count > 0)  setCount(count - 1) };
    if (count > 0) {
         clr="article-state green"
    }
    else {
         clr="article-state red"
    }

    return (
        <div className="article">
            <div className="article-name">{produit.name}</div>
        <div className="article-picture">
            <div className="article-img"><img src={produit.url} alt="produitIcon"></img></div>
                <div className="article-stock">x{count}</div>
        </div>
            <div className={clr}>En Stock</div>
        <div className="article-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam necessitatibus quia fuga rem mollitia? Non error, quasi placeat alias amet aspernatur cum veniam molestiae perferendis excepturi fuga expedita. Possimus, officia.</div>
        <div className="buy-button" onClick={disc}>Buy</div>
            <div className="article-price">{produit.price}</div>
        {produit.children}
    </div>
    )
}

export default Article
*/



































/*import React from "react";




function product(article) {
    console.log(article.article.x)
    return (
        <div></div>
    )
}

function product(article) {
        console.log(article)
    if (article.stock == "x0") {
        var classState = "article-state red"
        var state="Hors stock"
    }
    else {
        var classState = "article-state green"
        var state="En Stock"
    }
    return (
            <div className="article">
            <div className="article-name">{article.name}</div>
        <div className="article-picture">
            <div className="article-img"><img src={article.url} alt={article.url}></img></div>
                <div className="article-stock">{article.stock}</div>
            </div>
            
        <div className={classState}>{state}</div>
        <div className="article-description">{article.desc}</div>
        <div className="buy-button">Buy</div>
        <div className="article-price">{article.price}</div>
        
        {article.children}
    </div>
    )
}
export default product
*/