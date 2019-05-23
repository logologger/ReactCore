This Text contains the React JS Course Code from Kirupa Book


<h1> Important Points </h1>

<p>
three things cause a render method to automatically get called:
<ol>

<li>

 A prop that lives on your component gets updated
 
 </li>
 
 <li> A state property that lives on your component gets updated.
 
 
 </li> 
 
 <li> parent component’s render method gets called.

</li>
</ol>
</p>

<h3> Why do we have Redux  </h3>


<pre>

The reason is scalability. Even for simple apps, keeping our application state in-sync with what our app is doing is a chore. For complex apps in which different parts want to access and modify the application state, forget about it! This roundabout way is Redux’s answer for making sure storing application state is easy for both simple apps and complex ones. Beyond just ease, Redux helps make maintaining your application state predictable. Dan Abramov and Andrew Clark, the creators of Redux, interpreted predictable as follows:

1. Your entire application’s state is stored in a single location. You don’t have to search across a variety of data stores to find the part of your state you want to update. Keeping everything stored in a single location also ensures that you don’t have to worry about keeping all of this data in sync.

2. Your state should be read-only and can be modified only through actions. As you saw in the diagram earlier, in a Redux world, you need to ensure that random parts of your app can’t access the Store and modify the state stored inside it. The only way our app can modify what is in the Store is by relying on actions.

3. You specify what the final state should be. To keep things simple, your state is never modified or mutated. You use a reducer to specify what the final result of your state should be.

</pre>

<h3>Things you should never do inside a Reducer</h3>

<pre>



  Mutate its arguments

 Perform side effects like API calls and routing transitions

 Call non-pure functions, e.g. Date.now() or Math.random()

Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.
</pre>