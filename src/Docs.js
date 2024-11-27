import './docs.css';


function Docs(){
    return(
        <div className='docsDiv'>
            <h1>LoL Champions Search Library</h1>
            <p className='homePageParag'>When the <strong>home</strong> site has been entered, the user is able to:</p>
            <ul>
                <li>
                    <strong>Click on the League of Legends logo image,</strong> 
                    causing them to be redirected to the League of Legends Official Site.
                </li>
                <li>
                    <strong>Choose one of the options in the navbar:</strong>
                    <ul>
                        <li>Home - redirects them to the home page.</li>
                        <li>hampions - redirects them to the champion search page.</li>
                        <li>Docs - redirects them to the docs page.</li>
                    </ul>
                </li>
            </ul>
            <hr/>
            <p className='championSearchParag'>When entering the <strong>champion search page</strong>, the user is able to:</p>
            <ul>
                <li>
                    <strong>Input a champion's name</strong> and click the <strong>"search"</strong> button, 
                    which will display all champions with the given input.
                </li>
                <li>
                    <strong>Filter the displayed champions</strong> by selecting the filter type and hitting "search" again.
                    The champions are always filtered alphabetically, regardless of the chosen filter.
                </li>
                <li>
                    <strong>Enter the champions's <i>details page</i></strong> by clicking on the chosen champion. While there, the user can
                    read more about the champion and even choose to be redirected to the champion's official dedicated page.
                </li>
            </ul>
            <hr/>
            <p className='docsParag'>When entering the <strong>docs</strong> page, the user is able to:</p>
            <ul>
                <li>Read about the site's functionality and learn how to properly use it</li>
            </ul>
        </div>

    )
}

export default Docs