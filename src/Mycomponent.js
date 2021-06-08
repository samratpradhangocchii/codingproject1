
import ref1 from'./Unknown.jpeg';


const Mycomponent =() => {
return(
<div>

<head> 
    <title> html practice</title>
</head>

<body>


<h1> Hello World</h1>

<br></br>
<a href="https://google.com" class="bluebutton" > Google </a> 
<br></br>
<a href="https://youtube.com" class="redbutton">YouTube</a>
<br></br>

<h2>second header</h2>
<h6>smallest header</h6>
<blockquote cite="somerandomwebsite.co">hello this is a blockquote </blockquote>



<a href=""> <img src={ref1} alt="City of Chicago Image"/></a>
   
    <p>Hello everyone.</p>
    <p> <strong>the definition of paragraph is:</strong> a distinct section of a piece of writing,
     usually dealing with a single theme and indicated by a new line, <em>indentation</em>, or numbering. 
     to learn more click <a href="https://www.dictionary.com/browse/paragraph" target="_blank"> here </a> </p>
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>

<ol>
    <li>Ordered Item 1</li>
    <li>Ordered Item 2</li>
    <li>Ordered Item 3</li>
    <li>Ordered Item 4</li>
    <li>Ordered Item 5</li>
</ol>

<table>
    <thead>
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>  
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Samrat Pradhan</td>
            <td>samrat.pradhan@gocchii.com</td>
            <td>18</td>
        </tr>
        <tr>
            <td>Archana Bhandari</td>
            <td>archana.bhandari@gocchii.com</td>
            <td>??</td>
        </tr>
    </tbody>
</table>

<hr></hr>

<form>
    <label>First Name</label>
    <input type="text" name="firstName" placeholder="enter first name" ></input>
    <br></br>
    
    <label>Last Name</label>
    <input type="text" name="lastName"></input>
    <br></br>
    
    <label>Email</label>
    <input type="email" name="email"></input>
    
    <br></br>
    <label>Message</label>
    <textarea name="textArea"></textarea>

    <br></br>
    <label>Gender</label>
    <select name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
    </select>

    <br></br>
    <label>birthday</label>
    <input type="date" name="birthday"></input>

    <br></br>
    <input type="submit" name="submit" value="submit" ></input>
    <button>click me</button>

</form>
    
    
    </body>
    </div>

)
}
export default Mycomponent;