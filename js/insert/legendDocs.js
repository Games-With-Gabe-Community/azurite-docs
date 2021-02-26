/** 
 * Contains the links that are inserted into the HTML on load for documentation website
 */
let legend = `
<h3>Getting Started</h3>
<nav>
    <ul>
        <!-- Pages -->
        <li><a href="/index.html">Introduction</a></li>
        <li><a href="/docs/contributing.html">Contributing</a></li>
        <li><a href="/docs/contributors.html">Contributors</a></li>
    </ul>
</nav>

<h3>Working In Azurite</h3>
<nav>
    <ul>
        <!-- Pages -->
        <li><a href="/docs/how-engine-works.html">How the engine works</a></li>
        <li><a href="/docs/structure.html">Structure of Azurite</a></li>
    </ul>
</nav>
`;

function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
}


add('.legend-card', legend);


