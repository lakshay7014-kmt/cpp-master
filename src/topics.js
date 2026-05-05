// ============================================================
// C++ MASTER — ALL TOPICS DATA
// ============================================================

const TOPICS = [
  // ---- 0 ----
  {
    title: "Introduction to C++",
    icon: "🔤",
    category: "Basics",
    content: `
      <h2>🔤 Introduction to C++</h2>
      <div class="topic-meta">Category: Basics | Difficulty: Beginner</div>

      <p>C++ is a <strong>general-purpose programming language</strong> created by Bjarne Stroustrup in 1979 as an extension of C. It supports procedural, object-oriented, and generic programming.</p>

      <h3>Why Learn C++?</h3>
      <ul>
        <li>Used in Game Development (Unreal Engine, Unity)</li>
        <li>System Programming & Operating Systems</li>
        <li>High Performance Applications</li>
        <li>Embedded Systems & IoT</li>
        <li>Compilers & Database Engines</li>
      </ul>

      <h3>Your First C++ Program</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 hello.cpp</span></div>
        <pre><span class="c-inc">#include</span> <span class="c-str">&lt;iostream&gt;</span>   <span class="c-comment">// Input/Output library</span>
<span class="c-key">using namespace</span> std;    <span class="c-comment">// Standard namespace</span>

<span class="c-key">int</span> <span class="c-fn">main</span>() {            <span class="c-comment">// Entry point</span>
    cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Hello, World!"</span> <span class="c-op">&lt;&lt;</span> endl;
    <span class="c-key">return</span> <span class="c-num">0</span>;           <span class="c-comment">// Success</span>
}</pre>
      </div>

      <h3>How to Compile & Run</h3>
      <div class="code-block">
        <div class="code-block-header"><span>💻 Terminal</span></div>
        <pre><span class="c-comment"># Compile</span>
g++ hello.cpp -o hello

<span class="c-comment"># Run</span>
./hello

<span class="c-comment"># Output</span>
Hello, World!</pre>
      </div>

      <div class="tip-box">
        <strong>💡 Tip:</strong> Always use <code>return 0;</code> at the end of <code>main()</code>. It tells the OS the program ran successfully.
      </div>

      <h3>Structure of a C++ Program</h3>
      <ul>
        <li><strong>#include</strong> — Includes header files (libraries)</li>
        <li><strong>using namespace std</strong> — Avoids typing std:: before cout, cin</li>
        <li><strong>int main()</strong> — Starting point of execution</li>
        <li><strong>cout</strong> — Prints output to screen</li>
        <li><strong>endl / \\n</strong> — New line character</li>
      </ul>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>Write a C++ program that prints your name and age.</li>
          <li>What is the difference between <code>endl</code> and <code>\\n</code>?</li>
          <li>What happens if you remove <code>#include &lt;iostream&gt;</code>?</li>
          <li>Why is <code>int main()</code> the entry point and not any other function?</li>
        </ol>
      </div>
    `
  },

  // ---- 1 ----
  {
    title: "Variables & Data Types",
    icon: "📦",
    category: "Basics",
    content: `
      <h2>📦 Variables & Data Types</h2>
      <div class="topic-meta">Category: Basics | Difficulty: Beginner</div>

      <p>A <strong>variable</strong> is a named storage location in memory. C++ is a statically-typed language, meaning you must declare the type before using a variable.</p>

      <h3>Primitive Data Types</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 datatypes.cpp</span></div>
        <pre><span class="c-key">int</span>    age = <span class="c-num">25</span>;          <span class="c-comment">// 4 bytes: -2B to +2B</span>
<span class="c-key">float</span>  pi = <span class="c-num">3.14f</span>;       <span class="c-comment">// 4 bytes: ~7 digits</span>
<span class="c-key">double</span> gravity = <span class="c-num">9.8</span>;    <span class="c-comment">// 8 bytes: ~15 digits</span>
<span class="c-key">char</span>   grade = <span class="c-str">'A'</span>;      <span class="c-comment">// 1 byte: single char</span>
<span class="c-key">bool</span>   pass = <span class="c-key">true</span>;      <span class="c-comment">// 1 byte: true/false</span>
<span class="c-key">string</span> name = <span class="c-str">"Rahul"</span>;   <span class="c-comment">// variable length text</span>

cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Name: "</span> <span class="c-op">&lt;&lt;</span> name <span class="c-op">&lt;&lt;</span> endl;
cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Age: "</span> <span class="c-op">&lt;&lt;</span> age <span class="c-op">&lt;&lt;</span> endl;</pre>
      </div>

      <h3>Type Modifiers</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 modifiers.cpp</span></div>
        <pre><span class="c-key">unsigned int</span>   x = <span class="c-num">300</span>;    <span class="c-comment">// only positive: 0 to 4B</span>
<span class="c-key">long int</span>       y = <span class="c-num">99999L</span>;  <span class="c-comment">// 4-8 bytes</span>
<span class="c-key">long long int</span>  z = <span class="c-num">123456789012LL</span>;
<span class="c-key">short int</span>      s = <span class="c-num">100</span>;     <span class="c-comment">// 2 bytes: -32768 to +32767</span>
<span class="c-key">const int</span>      MAX = <span class="c-num">100</span>;   <span class="c-comment">// cannot change</span></pre>
      </div>

      <h3>auto Keyword (C++11)</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 auto.cpp</span></div>
        <pre><span class="c-key">auto</span> x = <span class="c-num">42</span>;         <span class="c-comment">// compiler detects: int</span>
<span class="c-key">auto</span> y = <span class="c-num">3.14</span>;       <span class="c-comment">// compiler detects: double</span>
<span class="c-key">auto</span> z = <span class="c-str">"hello"</span>;   <span class="c-comment">// compiler detects: const char*</span></pre>
      </div>

      <div class="tip-box">
        <strong>💡 Tip:</strong> Use <code>sizeof(type)</code> to check the size of any data type: <code>cout &lt;&lt; sizeof(int);</code> prints 4.
      </div>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>Declare variables to store student name, marks (float), and pass/fail status.</li>
          <li>What is the output of <code>cout &lt;&lt; sizeof(double);</code>?</li>
          <li>Why can't we store 300 in a <code>char</code> variable?</li>
          <li>What is the difference between <code>float</code> and <code>double</code>?</li>
        </ol>
      </div>
    `
  },

  // ---- 2 ----
  {
    title: "Operators",
    icon: "⚙️",
    category: "Basics",
    content: `
      <h2>⚙️ Operators</h2>
      <div class="topic-meta">Category: Basics | Difficulty: Beginner</div>

      <p>Operators perform operations on variables and values. C++ has rich set of operators.</p>

      <h3>Arithmetic Operators</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 arithmetic.cpp</span></div>
        <pre><span class="c-key">int</span> a = <span class="c-num">10</span>, b = <span class="c-num">3</span>;
cout <span class="c-op">&lt;&lt;</span> a <span class="c-op">+</span> b  <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// 13  Addition</span>
cout <span class="c-op">&lt;&lt;</span> a <span class="c-op">-</span> b  <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// 7   Subtraction</span>
cout <span class="c-op">&lt;&lt;</span> a <span class="c-op">*</span> b  <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// 30  Multiplication</span>
cout <span class="c-op">&lt;&lt;</span> a <span class="c-op">/</span> b  <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// 3   Division (integer)</span>
cout <span class="c-op">&lt;&lt;</span> a <span class="c-op">%</span> b  <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// 1   Modulus (remainder)</span>
cout <span class="c-op">&lt;&lt;</span> a<span class="c-op">++</span>    <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// 10  Post-increment</span>
cout <span class="c-op">&lt;&lt;</span> <span class="c-op">++</span>b    <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// 4   Pre-increment</span></pre>
      </div>

      <h3>Relational & Logical Operators</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 logical.cpp</span></div>
        <pre><span class="c-key">int</span> x = <span class="c-num">5</span>;
cout <span class="c-op">&lt;&lt;</span> (x <span class="c-op">==</span> <span class="c-num">5</span>)  <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// 1 (true)</span>
cout <span class="c-op">&lt;&lt;</span> (x <span class="c-op">!=</span> <span class="c-num">3</span>)  <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// 1 (true)</span>
cout <span class="c-op">&lt;&lt;</span> (x <span class="c-op">&gt;</span> <span class="c-num">10</span>)  <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// 0 (false)</span>

<span class="c-comment">// Logical</span>
cout <span class="c-op">&lt;&lt;</span> (x <span class="c-op">&gt;</span> <span class="c-num">2</span> <span class="c-op">&amp;&amp;</span> x <span class="c-op">&lt;</span> <span class="c-num">10</span>)  <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// 1 AND</span>
cout <span class="c-op">&lt;&lt;</span> (x <span class="c-op">&lt;</span> <span class="c-num">2</span> <span class="c-op">||</span> x <span class="c-op">&gt;</span> <span class="c-num">3</span>)  <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// 1 OR</span>
cout <span class="c-op">&lt;&lt;</span> <span class="c-op">!</span>(x <span class="c-op">==</span> <span class="c-num">5</span>)           <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// 0 NOT</span></pre>
      </div>

      <h3>Ternary Operator</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 ternary.cpp</span></div>
        <pre><span class="c-key">int</span> age = <span class="c-num">18</span>;
string result = (age <span class="c-op">&gt;=</span> <span class="c-num">18</span>) ? <span class="c-str">"Adult"</span> : <span class="c-str">"Minor"</span>;
cout <span class="c-op">&lt;&lt;</span> result <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// Adult</span></pre>
      </div>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>What is the difference between <code>==</code> and <code>=</code>?</li>
          <li>What is the output: <code>int x=5; cout &lt;&lt; x++ &lt;&lt; " " &lt;&lt; ++x;</code>?</li>
          <li>Write a ternary expression to check if a number is even or odd.</li>
          <li>What does <code>%</code> operator do? Give an example.</li>
        </ol>
      </div>
    `
  },

  // ---- 3 ----
  {
    title: "Control Flow (if/else/switch)",
    icon: "🔀",
    category: "Control",
    content: `
      <h2>🔀 Control Flow</h2>
      <div class="topic-meta">Category: Control Statements | Difficulty: Beginner</div>

      <p>Control flow statements decide which code executes based on conditions.</p>

      <h3>if / else if / else</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 ifelse.cpp</span></div>
        <pre><span class="c-key">int</span> marks = <span class="c-num">75</span>;

<span class="c-key">if</span> (marks <span class="c-op">&gt;=</span> <span class="c-num">90</span>) {
    cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Grade: A+"</span> <span class="c-op">&lt;&lt;</span> endl;
} <span class="c-key">else if</span> (marks <span class="c-op">&gt;=</span> <span class="c-num">80</span>) {
    cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Grade: A"</span> <span class="c-op">&lt;&lt;</span> endl;
} <span class="c-key">else if</span> (marks <span class="c-op">&gt;=</span> <span class="c-num">60</span>) {
    cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Grade: B"</span> <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// this runs</span>
} <span class="c-key">else</span> {
    cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Grade: F"</span> <span class="c-op">&lt;&lt;</span> endl;
}</pre>
      </div>

      <h3>switch Statement</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 switch.cpp</span></div>
        <pre><span class="c-key">int</span> day = <span class="c-num">3</span>;
<span class="c-key">switch</span> (day) {
    <span class="c-key">case</span> <span class="c-num">1</span>: cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Monday"</span>;    <span class="c-key">break</span>;
    <span class="c-key">case</span> <span class="c-num">2</span>: cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Tuesday"</span>;   <span class="c-key">break</span>;
    <span class="c-key">case</span> <span class="c-num">3</span>: cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Wednesday"</span>; <span class="c-key">break</span>;  <span class="c-comment">// this runs</span>
    <span class="c-key">default</span>: cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Other day"</span>; <span class="c-key">break</span>;
}</pre>
      </div>

      <div class="warn-box">
        <strong>⚠️ Warning:</strong> Always use <code>break</code> in switch cases! Without it, execution "falls through" to the next case.
      </div>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>Write a program to classify a number as positive, negative, or zero.</li>
          <li>Create a simple calculator using switch statement.</li>
          <li>What is "fall-through" in switch? When is it useful?</li>
          <li>Can switch be used with strings in C++? Why or why not?</li>
        </ol>
      </div>
    `
  },

  // ---- 4 ----
  {
    title: "Loops (for / while / do-while)",
    icon: "🔄",
    category: "Control",
    content: `
      <h2>🔄 Loops</h2>
      <div class="topic-meta">Category: Control Statements | Difficulty: Beginner</div>

      <h3>for Loop</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 forloop.cpp</span></div>
        <pre><span class="c-comment">// Print 1 to 5</span>
<span class="c-key">for</span> (<span class="c-key">int</span> i = <span class="c-num">1</span>; i <span class="c-op">&lt;=</span> <span class="c-num">5</span>; i<span class="c-op">++</span>) {
    cout <span class="c-op">&lt;&lt;</span> i <span class="c-op">&lt;&lt;</span> <span class="c-str">" "</span>;
}
<span class="c-comment">// Output: 1 2 3 4 5</span>

<span class="c-comment">// Range-based for (C++11)</span>
<span class="c-key">int</span> arr[] = {<span class="c-num">1</span>, <span class="c-num">2</span>, <span class="c-num">3</span>, <span class="c-num">4</span>, <span class="c-num">5</span>};
<span class="c-key">for</span> (<span class="c-key">int</span> x : arr) {
    cout <span class="c-op">&lt;&lt;</span> x <span class="c-op">&lt;&lt;</span> <span class="c-str">" "</span>;
}</pre>
      </div>

      <h3>while Loop</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 while.cpp</span></div>
        <pre><span class="c-key">int</span> n = <span class="c-num">1</span>;
<span class="c-key">while</span> (n <span class="c-op">&lt;=</span> <span class="c-num">5</span>) {
    cout <span class="c-op">&lt;&lt;</span> n <span class="c-op">&lt;&lt;</span> <span class="c-str">" "</span>;
    n<span class="c-op">++</span>;
}
<span class="c-comment">// Output: 1 2 3 4 5</span></pre>
      </div>

      <h3>do-while Loop</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 dowhile.cpp</span></div>
        <pre><span class="c-key">int</span> i = <span class="c-num">0</span>;
<span class="c-key">do</span> {
    cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Runs at least once!"</span> <span class="c-op">&lt;&lt;</span> endl;
    i<span class="c-op">++</span>;
} <span class="c-key">while</span> (i <span class="c-op">&lt;</span> <span class="c-num">3</span>);
<span class="c-comment">// Executes body FIRST, then checks condition</span></pre>
      </div>

      <h3>break & continue</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 breakcontinue.cpp</span></div>
        <pre><span class="c-key">for</span> (<span class="c-key">int</span> i = <span class="c-num">1</span>; i <span class="c-op">&lt;=</span> <span class="c-num">10</span>; i<span class="c-op">++</span>) {
    <span class="c-key">if</span> (i <span class="c-op">==</span> <span class="c-num">5</span>) <span class="c-key">break</span>;     <span class="c-comment">// Stop at 5</span>
    <span class="c-key">if</span> (i <span class="c-op">%</span> <span class="c-num">2</span> <span class="c-op">==</span> <span class="c-num">0</span>) <span class="c-key">continue</span>; <span class="c-comment">// Skip even</span>
    cout <span class="c-op">&lt;&lt;</span> i <span class="c-op">&lt;&lt;</span> <span class="c-str">" "</span>;
}
<span class="c-comment">// Output: 1 3</span></pre>
      </div>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>Print multiplication table of 7 using a for loop.</li>
          <li>Print all even numbers from 1 to 100 using while loop.</li>
          <li>Write a program to find sum of digits of a number.</li>
          <li>What is infinite loop? How to create and avoid one?</li>
        </ol>
      </div>
    `
  },

  // ---- 5 ----
  {
    title: "Functions",
    icon: "⚡",
    category: "Functions",
    content: `
      <h2>⚡ Functions</h2>
      <div class="topic-meta">Category: Functions | Difficulty: Beginner-Intermediate</div>

      <p>A <strong>function</strong> is a reusable block of code that performs a specific task.</p>

      <h3>Function Syntax</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 functions.cpp</span></div>
        <pre><span class="c-comment">// Function declaration (prototype)</span>
<span class="c-key">int</span> <span class="c-fn">add</span>(<span class="c-key">int</span> a, <span class="c-key">int</span> b);

<span class="c-key">int</span> <span class="c-fn">main</span>() {
    <span class="c-key">int</span> result = <span class="c-fn">add</span>(<span class="c-num">5</span>, <span class="c-num">3</span>);
    cout <span class="c-op">&lt;&lt;</span> result <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// 8</span>
    <span class="c-key">return</span> <span class="c-num">0</span>;
}

<span class="c-comment">// Function definition</span>
<span class="c-key">int</span> <span class="c-fn">add</span>(<span class="c-key">int</span> a, <span class="c-key">int</span> b) {
    <span class="c-key">return</span> a <span class="c-op">+</span> b;
}</pre>
      </div>

      <h3>Default Parameters</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 default_params.cpp</span></div>
        <pre><span class="c-key">void</span> <span class="c-fn">greet</span>(string name, string msg = <span class="c-str">"Hello"</span>) {
    cout <span class="c-op">&lt;&lt;</span> msg <span class="c-op">&lt;&lt;</span> <span class="c-str">", "</span> <span class="c-op">&lt;&lt;</span> name <span class="c-op">&lt;&lt;</span> endl;
}

<span class="c-fn">greet</span>(<span class="c-str">"Rahul"</span>);           <span class="c-comment">// Hello, Rahul</span>
<span class="c-fn">greet</span>(<span class="c-str">"Priya"</span>, <span class="c-str">"Hi"</span>);   <span class="c-comment">// Hi, Priya</span></pre>
      </div>

      <h3>Function Overloading</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 overload.cpp</span></div>
        <pre><span class="c-key">int</span>    <span class="c-fn">area</span>(<span class="c-key">int</span> side)              { <span class="c-key">return</span> side <span class="c-op">*</span> side; }
<span class="c-key">double</span> <span class="c-fn">area</span>(<span class="c-key">double</span> r)             { <span class="c-key">return</span> <span class="c-num">3.14</span> <span class="c-op">*</span> r <span class="c-op">*</span> r; }
<span class="c-key">int</span>    <span class="c-fn">area</span>(<span class="c-key">int</span> l, <span class="c-key">int</span> b)        { <span class="c-key">return</span> l <span class="c-op">*</span> b; }

cout <span class="c-op">&lt;&lt;</span> <span class="c-fn">area</span>(<span class="c-num">5</span>)       <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// 25</span>
cout <span class="c-op">&lt;&lt;</span> <span class="c-fn">area</span>(<span class="c-num">3.0</span>)     <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// 28.26</span>
cout <span class="c-op">&lt;&lt;</span> <span class="c-fn">area</span>(<span class="c-num">4</span>, <span class="c-num">6</span>)   <span class="c-op">&lt;&lt;</span> endl;  <span class="c-comment">// 24</span></pre>
      </div>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>Write a function to check if a number is prime.</li>
          <li>Write an overloaded function <code>max()</code> for int and double.</li>
          <li>What is the difference between pass-by-value and pass-by-reference?</li>
          <li>Create a function that returns the factorial of a number.</li>
        </ol>
      </div>
    `
  },

  // ---- 6 ----
  {
    title: "Recursion",
    icon: "♻️",
    category: "Functions",
    content: `
      <h2>♻️ Recursion</h2>
      <div class="topic-meta">Category: Functions | Difficulty: Intermediate</div>

      <p>A function that calls itself is called <strong>recursive</strong>. It must have a base case to stop.</p>

      <h3>Factorial using Recursion</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 factorial.cpp</span></div>
        <pre><span class="c-key">int</span> <span class="c-fn">factorial</span>(<span class="c-key">int</span> n) {
    <span class="c-key">if</span> (n <span class="c-op">&lt;=</span> <span class="c-num">1</span>) <span class="c-key">return</span> <span class="c-num">1</span>;   <span class="c-comment">// base case</span>
    <span class="c-key">return</span> n <span class="c-op">*</span> <span class="c-fn">factorial</span>(n <span class="c-op">-</span> <span class="c-num">1</span>); <span class="c-comment">// recursive call</span>
}

cout <span class="c-op">&lt;&lt;</span> <span class="c-fn">factorial</span>(<span class="c-num">5</span>);  <span class="c-comment">// 120</span>
<span class="c-comment">// 5 * 4 * 3 * 2 * 1 = 120</span></pre>
      </div>

      <h3>Fibonacci using Recursion</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 fibonacci.cpp</span></div>
        <pre><span class="c-key">int</span> <span class="c-fn">fib</span>(<span class="c-key">int</span> n) {
    <span class="c-key">if</span> (n <span class="c-op">&lt;=</span> <span class="c-num">1</span>) <span class="c-key">return</span> n;
    <span class="c-key">return</span> <span class="c-fn">fib</span>(n<span class="c-op">-</span><span class="c-num">1</span>) <span class="c-op">+</span> <span class="c-fn">fib</span>(n<span class="c-op">-</span><span class="c-num">2</span>);
}

<span class="c-key">for</span> (<span class="c-key">int</span> i = <span class="c-num">0</span>; i <span class="c-op">&lt;</span> <span class="c-num">8</span>; i<span class="c-op">++</span>)
    cout <span class="c-op">&lt;&lt;</span> <span class="c-fn">fib</span>(i) <span class="c-op">&lt;&lt;</span> <span class="c-str">" "</span>;
<span class="c-comment">// Output: 0 1 1 2 3 5 8 13</span></pre>
      </div>

      <div class="warn-box">
        <strong>⚠️ Warning:</strong> Recursion without a base case causes <strong>stack overflow</strong>! Always define a stopping condition.
      </div>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>Write a recursive function to find GCD of two numbers.</li>
          <li>Implement binary search recursively.</li>
          <li>What are the advantages and disadvantages of recursion vs iteration?</li>
          <li>Write a recursive function to reverse a string.</li>
        </ol>
      </div>
    `
  },

  // ---- 7 ----
  {
    title: "Arrays",
    icon: "📋",
    category: "Data Structures",
    content: `
      <h2>📋 Arrays</h2>
      <div class="topic-meta">Category: Data Structures | Difficulty: Beginner</div>

      <p>An <strong>array</strong> stores multiple values of the same type in contiguous memory.</p>

      <h3>1D Array</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 arrays.cpp</span></div>
        <pre><span class="c-key">int</span> marks[<span class="c-num">5</span>] = {<span class="c-num">90</span>, <span class="c-num">85</span>, <span class="c-num">78</span>, <span class="c-num">92</span>, <span class="c-num">88</span>};

<span class="c-comment">// Access elements (0-indexed)</span>
cout <span class="c-op">&lt;&lt;</span> marks[<span class="c-num">0</span>];  <span class="c-comment">// 90</span>
cout <span class="c-op">&lt;&lt;</span> marks[<span class="c-num">4</span>];  <span class="c-comment">// 88</span>

<span class="c-comment">// Traverse with for loop</span>
<span class="c-key">for</span> (<span class="c-key">int</span> i = <span class="c-num">0</span>; i <span class="c-op">&lt;</span> <span class="c-num">5</span>; i<span class="c-op">++</span>) {
    cout <span class="c-op">&lt;&lt;</span> marks[i] <span class="c-op">&lt;&lt;</span> <span class="c-str">" "</span>;
}</pre>
      </div>

      <h3>2D Array</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 2d_array.cpp</span></div>
        <pre><span class="c-key">int</span> matrix[<span class="c-num">3</span>][<span class="c-num">3</span>] = {
    {<span class="c-num">1</span>, <span class="c-num">2</span>, <span class="c-num">3</span>},
    {<span class="c-num">4</span>, <span class="c-num">5</span>, <span class="c-num">6</span>},
    {<span class="c-num">7</span>, <span class="c-num">8</span>, <span class="c-num">9</span>}
};

<span class="c-key">for</span> (<span class="c-key">int</span> i = <span class="c-num">0</span>; i <span class="c-op">&lt;</span> <span class="c-num">3</span>; i<span class="c-op">++</span>) {
    <span class="c-key">for</span> (<span class="c-key">int</span> j = <span class="c-num">0</span>; j <span class="c-op">&lt;</span> <span class="c-num">3</span>; j<span class="c-op">++</span>)
        cout <span class="c-op">&lt;&lt;</span> matrix[i][j] <span class="c-op">&lt;&lt;</span> <span class="c-str">" "</span>;
    cout <span class="c-op">&lt;&lt;</span> endl;
}</pre>
      </div>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>Find the largest element in an array.</li>
          <li>Reverse an array without using another array.</li>
          <li>Write a program to add two matrices.</li>
          <li>Sort an array using Bubble Sort.</li>
        </ol>
      </div>
    `
  },

  // ---- 8 ----
  {
    title: "Strings",
    icon: "💬",
    category: "Data Structures",
    content: `
      <h2>💬 Strings</h2>
      <div class="topic-meta">Category: Data Structures | Difficulty: Beginner</div>

      <h3>C++ String (std::string)</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 strings.cpp</span></div>
        <pre><span class="c-inc">#include</span> <span class="c-str">&lt;string&gt;</span>
string s = <span class="c-str">"Hello, World!"</span>;

cout <span class="c-op">&lt;&lt;</span> s.<span class="c-fn">length</span>();         <span class="c-comment">// 13</span>
cout <span class="c-op">&lt;&lt;</span> s.<span class="c-fn">substr</span>(<span class="c-num">0</span>, <span class="c-num">5</span>);    <span class="c-comment">// Hello</span>
cout <span class="c-op">&lt;&lt;</span> s.<span class="c-fn">find</span>(<span class="c-str">"World"</span>);  <span class="c-comment">// 7</span>
cout <span class="c-op">&lt;&lt;</span> s[<span class="c-num">0</span>];               <span class="c-comment">// H</span>

<span class="c-comment">// Concatenation</span>
string a = <span class="c-str">"C++"</span>, b = <span class="c-str">" Master"</span>;
string c = a <span class="c-op">+</span> b;
cout <span class="c-op">&lt;&lt;</span> c;  <span class="c-comment">// C++ Master</span>

<span class="c-comment">// String to/from number</span>
string num = to_string(<span class="c-num">42</span>);
<span class="c-key">int</span> n = stoi(<span class="c-str">"123"</span>);</pre>
      </div>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>Write a program to check if a string is a palindrome.</li>
          <li>Count vowels and consonants in a string.</li>
          <li>Reverse a string without using reverse().</li>
          <li>Remove all spaces from a string.</li>
        </ol>
      </div>
    `
  },

  // ---- 9 ----
  {
    title: "OOP — Classes & Objects",
    icon: "🧱",
    category: "OOP",
    content: `
      <h2>🧱 Classes & Objects</h2>
      <div class="topic-meta">Category: OOP | Difficulty: Intermediate</div>

      <p>OOP organizes code into <strong>objects</strong> that combine data (attributes) and behavior (methods).</p>

      <h3>Creating a Class</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 class.cpp</span></div>
        <pre><span class="c-key">class</span> <span class="c-type">Student</span> {
<span class="c-key">private</span>:
    string name;
    <span class="c-key">int</span> age;

<span class="c-key">public</span>:
    <span class="c-comment">// Constructor</span>
    <span class="c-fn">Student</span>(string n, <span class="c-key">int</span> a) : name(n), age(a) {}

    <span class="c-comment">// Methods</span>
    <span class="c-key">void</span> <span class="c-fn">display</span>() {
        cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Name: "</span> <span class="c-op">&lt;&lt;</span> name
             <span class="c-op">&lt;&lt;</span> <span class="c-str">", Age: "</span> <span class="c-op">&lt;&lt;</span> age <span class="c-op">&lt;&lt;</span> endl;
    }

    string <span class="c-fn">getName</span>() { <span class="c-key">return</span> name; }
};

<span class="c-comment">// Creating objects</span>
<span class="c-type">Student</span> s1(<span class="c-str">"Rahul"</span>, <span class="c-num">20</span>);
s1.<span class="c-fn">display</span>();  <span class="c-comment">// Name: Rahul, Age: 20</span></pre>
      </div>

      <h3>4 Pillars of OOP</h3>
      <ul>
        <li><strong>Encapsulation</strong> — Hiding data using private/public</li>
        <li><strong>Inheritance</strong> — Child class inherits parent class</li>
        <li><strong>Polymorphism</strong> — Same method, different behavior</li>
        <li><strong>Abstraction</strong> — Hiding complexity, showing essentials</li>
      </ul>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>Create a <code>BankAccount</code> class with deposit/withdraw methods.</li>
          <li>What is the difference between struct and class in C++?</li>
          <li>Explain encapsulation with a real-world example.</li>
          <li>What is a constructor? Can a class have multiple constructors?</li>
        </ol>
      </div>
    `
  },

  // ---- 10 ----
  {
    title: "Inheritance",
    icon: "🔗",
    category: "OOP",
    content: `
      <h2>🔗 Inheritance</h2>
      <div class="topic-meta">Category: OOP | Difficulty: Intermediate</div>

      <h3>Single Inheritance</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 inheritance.cpp</span></div>
        <pre><span class="c-key">class</span> <span class="c-type">Animal</span> {
<span class="c-key">public</span>:
    string name;
    <span class="c-key">void</span> <span class="c-fn">eat</span>() { cout <span class="c-op">&lt;&lt;</span> name <span class="c-op">&lt;&lt;</span> <span class="c-str">" is eating"</span>; }
};

<span class="c-key">class</span> <span class="c-type">Dog</span> : <span class="c-key">public</span> <span class="c-type">Animal</span> {  <span class="c-comment">// inherits Animal</span>
<span class="c-key">public</span>:
    <span class="c-key">void</span> <span class="c-fn">bark</span>() { cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Woof!"</span>; }
};

<span class="c-type">Dog</span> d;
d.name = <span class="c-str">"Tommy"</span>;
d.<span class="c-fn">eat</span>();   <span class="c-comment">// Tommy is eating (from Animal)</span>
d.<span class="c-fn">bark</span>();  <span class="c-comment">// Woof! (from Dog)</span></pre>
      </div>

      <h3>Types of Inheritance</h3>
      <ul>
        <li><strong>Single</strong> — One parent, one child</li>
        <li><strong>Multiple</strong> — Multiple parents, one child</li>
        <li><strong>Multilevel</strong> — Grandparent → Parent → Child</li>
        <li><strong>Hierarchical</strong> — One parent, multiple children</li>
        <li><strong>Hybrid</strong> — Combination of above</li>
      </ul>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>Create a <code>Vehicle</code> base class and derive <code>Car</code> and <code>Truck</code>.</li>
          <li>What is the Diamond Problem in multiple inheritance?</li>
          <li>Explain protected access specifier with example.</li>
          <li>Can a derived class access private members of base class?</li>
        </ol>
      </div>
    `
  },

  // ---- 11 ----
  {
    title: "Polymorphism",
    icon: "🎭",
    category: "OOP",
    content: `
      <h2>🎭 Polymorphism</h2>
      <div class="topic-meta">Category: OOP | Difficulty: Intermediate</div>

      <h3>Virtual Functions (Runtime Polymorphism)</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 polymorphism.cpp</span></div>
        <pre><span class="c-key">class</span> <span class="c-type">Shape</span> {
<span class="c-key">public</span>:
    <span class="c-key">virtual</span> <span class="c-key">void</span> <span class="c-fn">draw</span>() {
        cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Drawing Shape"</span>;
    }
};

<span class="c-key">class</span> <span class="c-type">Circle</span> : <span class="c-key">public</span> <span class="c-type">Shape</span> {
<span class="c-key">public</span>:
    <span class="c-key">void</span> <span class="c-fn">draw</span>() <span class="c-key">override</span> {
        cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Drawing Circle"</span>;
    }
};

<span class="c-type">Shape</span><span class="c-op">*</span> s = <span class="c-key">new</span> <span class="c-type">Circle</span>();
s<span class="c-op">-&gt;</span><span class="c-fn">draw</span>();  <span class="c-comment">// Drawing Circle ← correct!</span></pre>
      </div>

      <div class="tip-box">
        <strong>💡 Tip:</strong> Use <code>virtual</code> in base class and <code>override</code> in derived class. Always declare destructors as virtual in base classes.
      </div>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>What is the difference between compile-time and runtime polymorphism?</li>
          <li>Create a Shape hierarchy with virtual <code>area()</code> method.</li>
          <li>What is a pure virtual function? What is an abstract class?</li>
          <li>Why should destructors be virtual?</li>
        </ol>
      </div>
    `
  },

  // ---- 12 ----
  {
    title: "Pointers",
    icon: "📌",
    category: "Memory",
    content: `
      <h2>📌 Pointers</h2>
      <div class="topic-meta">Category: Memory Management | Difficulty: Intermediate</div>

      <p>A <strong>pointer</strong> stores the memory address of another variable.</p>

      <h3>Pointer Basics</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 pointers.cpp</span></div>
        <pre><span class="c-key">int</span> x = <span class="c-num">42</span>;
<span class="c-key">int</span><span class="c-op">*</span> ptr = <span class="c-op">&amp;</span>x;   <span class="c-comment">// ptr stores address of x</span>

cout <span class="c-op">&lt;&lt;</span> x;     <span class="c-comment">// 42     (value)</span>
cout <span class="c-op">&lt;&lt;</span> <span class="c-op">&amp;</span>x;    <span class="c-comment">// 0x...  (address of x)</span>
cout <span class="c-op">&lt;&lt;</span> ptr;   <span class="c-comment">// 0x...  (same address)</span>
cout <span class="c-op">&lt;&lt;</span> <span class="c-op">*</span>ptr;  <span class="c-comment">// 42     (dereferencing)</span>

<span class="c-op">*</span>ptr = <span class="c-num">100</span>;   <span class="c-comment">// changes x to 100!</span>
cout <span class="c-op">&lt;&lt;</span> x;     <span class="c-comment">// 100</span></pre>
      </div>

      <h3>Dynamic Memory</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 dynamic.cpp</span></div>
        <pre><span class="c-key">int</span><span class="c-op">*</span> p = <span class="c-key">new</span> <span class="c-key">int</span>(<span class="c-num">10</span>);   <span class="c-comment">// allocate</span>
cout <span class="c-op">&lt;&lt;</span> <span class="c-op">*</span>p;              <span class="c-comment">// 10</span>
<span class="c-key">delete</span> p;               <span class="c-comment">// free memory!</span>
p = <span class="c-key">nullptr</span>;           <span class="c-comment">// good practice</span>

<span class="c-comment">// Dynamic array</span>
<span class="c-key">int</span><span class="c-op">*</span> arr = <span class="c-key">new</span> <span class="c-key">int</span>[<span class="c-num">5</span>];
arr[<span class="c-num">0</span>] = <span class="c-num">1</span>;
<span class="c-key">delete</span>[] arr;</pre>
      </div>

      <div class="warn-box">
        <strong>⚠️ Warning:</strong> Always <code>delete</code> what you <code>new</code>! Memory leaks occur when allocated memory is never freed.
      </div>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>What is null pointer? Why is it important?</li>
          <li>Explain pointer arithmetic with an example.</li>
          <li>What is the difference between pointer and reference?</li>
          <li>Write a function that swaps two numbers using pointers.</li>
        </ol>
      </div>
    `
  },

  // ---- 13 ----
  {
    title: "File Handling",
    icon: "📂",
    category: "Advanced",
    content: `
      <h2>📂 File Handling</h2>
      <div class="topic-meta">Category: Advanced | Difficulty: Intermediate</div>

      <h3>Writing & Reading Files</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 files.cpp</span></div>
        <pre><span class="c-inc">#include</span> <span class="c-str">&lt;fstream&gt;</span>

<span class="c-comment">// WRITE to file</span>
ofstream outFile(<span class="c-str">"data.txt"</span>);
outFile <span class="c-op">&lt;&lt;</span> <span class="c-str">"Hello, File!"</span> <span class="c-op">&lt;&lt;</span> endl;
outFile.<span class="c-fn">close</span>();

<span class="c-comment">// READ from file</span>
ifstream inFile(<span class="c-str">"data.txt"</span>);
string line;
<span class="c-key">while</span> (<span class="c-fn">getline</span>(inFile, line)) {
    cout <span class="c-op">&lt;&lt;</span> line <span class="c-op">&lt;&lt;</span> endl;
}
inFile.<span class="c-fn">close</span>();</pre>
      </div>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>Write a program to count words in a file.</li>
          <li>Copy contents of one file to another.</li>
          <li>What are the file modes: ios::app, ios::trunc, ios::binary?</li>
          <li>Write a student record management system using files.</li>
        </ol>
      </div>
    `
  },

  // ---- 14 ----
  {
    title: "STL — Vectors",
    icon: "📦",
    category: "STL",
    content: `
      <h2>📦 STL — Vectors</h2>
      <div class="topic-meta">Category: STL | Difficulty: Intermediate</div>

      <p><strong>vector</strong> is a dynamic array that grows/shrinks automatically.</p>

      <h3>Vector Operations</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 vector.cpp</span></div>
        <pre><span class="c-inc">#include</span> <span class="c-str">&lt;vector&gt;</span>

vector<span class="c-op">&lt;</span><span class="c-key">int</span><span class="c-op">&gt;</span> v = {<span class="c-num">10</span>, <span class="c-num">20</span>, <span class="c-num">30</span>};

v.<span class="c-fn">push_back</span>(<span class="c-num">40</span>);   <span class="c-comment">// add to end</span>
v.<span class="c-fn">pop_back</span>();     <span class="c-comment">// remove from end</span>
v.<span class="c-fn">insert</span>(v.<span class="c-fn">begin</span>()<span class="c-op">+</span><span class="c-num">1</span>, <span class="c-num">15</span>);  <span class="c-comment">// insert at index 1</span>
v.<span class="c-fn">erase</span>(v.<span class="c-fn">begin</span>());  <span class="c-comment">// remove first</span>

cout <span class="c-op">&lt;&lt;</span> v.<span class="c-fn">size</span>();    <span class="c-comment">// number of elements</span>
cout <span class="c-op">&lt;&lt;</span> v.<span class="c-fn">front</span>();   <span class="c-comment">// first element</span>
cout <span class="c-op">&lt;&lt;</span> v.<span class="c-fn">back</span>();    <span class="c-comment">// last element</span>

<span class="c-key">for</span> (<span class="c-key">auto</span> x : v) cout <span class="c-op">&lt;&lt;</span> x <span class="c-op">&lt;&lt;</span> <span class="c-str">" "</span>;</pre>
      </div>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>Sort a vector in descending order using <code>sort()</code>.</li>
          <li>Find the maximum element in a vector.</li>
          <li>Remove duplicates from a vector.</li>
          <li>What is the difference between <code>size()</code> and <code>capacity()</code>?</li>
        </ol>
      </div>
    `
  },

  // ---- 15 ----
  {
    title: "STL — Map & Set",
    icon: "🗺️",
    category: "STL",
    content: `
      <h2>🗺️ STL — Map & Set</h2>
      <div class="topic-meta">Category: STL | Difficulty: Intermediate</div>

      <h3>Map (Key-Value Pairs)</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 map.cpp</span></div>
        <pre><span class="c-inc">#include</span> <span class="c-str">&lt;map&gt;</span>

map<span class="c-op">&lt;</span>string, <span class="c-key">int</span><span class="c-op">&gt;</span> age;
age[<span class="c-str">"Rahul"</span>] = <span class="c-num">20</span>;
age[<span class="c-str">"Priya"</span>] = <span class="c-num">22</span>;

cout <span class="c-op">&lt;&lt;</span> age[<span class="c-str">"Rahul"</span>];  <span class="c-comment">// 20</span>

<span class="c-key">for</span> (<span class="c-key">auto</span> p : age)
    cout <span class="c-op">&lt;&lt;</span> p.first <span class="c-op">&lt;&lt;</span> <span class="c-str">": "</span> <span class="c-op">&lt;&lt;</span> p.second <span class="c-op">&lt;&lt;</span> endl;</pre>
      </div>

      <h3>Set (Unique Sorted Values)</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 set.cpp</span></div>
        <pre><span class="c-inc">#include</span> <span class="c-str">&lt;set&gt;</span>

set<span class="c-op">&lt;</span><span class="c-key">int</span><span class="c-op">&gt;</span> s = {<span class="c-num">3</span>, <span class="c-num">1</span>, <span class="c-num">4</span>, <span class="c-num">1</span>, <span class="c-num">5</span>};
<span class="c-comment">// automatically: {1, 3, 4, 5} — sorted, unique</span>

s.<span class="c-fn">insert</span>(<span class="c-num">2</span>);
s.<span class="c-fn">erase</span>(<span class="c-num">3</span>);
cout <span class="c-op">&lt;&lt;</span> s.<span class="c-fn">count</span>(<span class="c-num">4</span>);   <span class="c-comment">// 1 (exists)</span></pre>
      </div>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>Count frequency of each character in a string using map.</li>
          <li>Find common elements of two arrays using set.</li>
          <li>What is the difference between map and unordered_map?</li>
          <li>Implement a phone directory using map.</li>
        </ol>
      </div>
    `
  },

  // ---- 16 ----
  {
    title: "Templates",
    icon: "🧬",
    category: "Advanced",
    content: `
      <h2>🧬 Templates</h2>
      <div class="topic-meta">Category: Advanced | Difficulty: Advanced</div>

      <p>Templates allow writing <strong>generic code</strong> that works with any data type.</p>

      <h3>Function Template</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 templates.cpp</span></div>
        <pre><span class="c-key">template</span> <span class="c-op">&lt;</span><span class="c-key">typename</span> T<span class="c-op">&gt;</span>
T <span class="c-fn">maxVal</span>(T a, T b) {
    <span class="c-key">return</span> (a <span class="c-op">&gt;</span> b) ? a : b;
}

cout <span class="c-op">&lt;&lt;</span> <span class="c-fn">maxVal</span>(<span class="c-num">3</span>, <span class="c-num">7</span>);        <span class="c-comment">// 7 (int)</span>
cout <span class="c-op">&lt;&lt;</span> <span class="c-fn">maxVal</span>(<span class="c-num">3.5</span>, <span class="c-num">2.1</span>);   <span class="c-comment">// 3.5 (double)</span>
cout <span class="c-op">&lt;&lt;</span> <span class="c-fn">maxVal</span>(<span class="c-str">'z'</span>, <span class="c-str">'a'</span>);  <span class="c-comment">// z (char)</span></pre>
      </div>

      <h3>Class Template</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 class_template.cpp</span></div>
        <pre><span class="c-key">template</span> <span class="c-op">&lt;</span><span class="c-key">typename</span> T<span class="c-op">&gt;</span>
<span class="c-key">class</span> <span class="c-type">Box</span> {
    T value;
<span class="c-key">public</span>:
    <span class="c-fn">Box</span>(T v) : value(v) {}
    T <span class="c-fn">get</span>() { <span class="c-key">return</span> value; }
};

<span class="c-type">Box</span><span class="c-op">&lt;</span><span class="c-key">int</span><span class="c-op">&gt;</span>    intBox(<span class="c-num">42</span>);
<span class="c-type">Box</span><span class="c-op">&lt;</span>string<span class="c-op">&gt;</span> strBox(<span class="c-str">"Hi"</span>);</pre>
      </div>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>Write a generic swap function using templates.</li>
          <li>Create a generic Stack class using templates.</li>
          <li>What is template specialization?</li>
          <li>What is the difference between template and function overloading?</li>
        </ol>
      </div>
    `
  },

  // ---- 17 ----
  {
    title: "Exception Handling",
    icon: "⛑️",
    category: "Advanced",
    content: `
      <h2>⛑️ Exception Handling</h2>
      <div class="topic-meta">Category: Advanced | Difficulty: Intermediate</div>

      <h3>try / catch / throw</h3>
      <div class="code-block">
        <div class="code-block-header"><span>📄 exceptions.cpp</span></div>
        <pre><span class="c-key">int</span> <span class="c-fn">divide</span>(<span class="c-key">int</span> a, <span class="c-key">int</span> b) {
    <span class="c-key">if</span> (b == <span class="c-num">0</span>)
        <span class="c-key">throw</span> runtime_error(<span class="c-str">"Division by zero!"</span>);
    <span class="c-key">return</span> a / b;
}

<span class="c-key">try</span> {
    cout <span class="c-op">&lt;&lt;</span> <span class="c-fn">divide</span>(<span class="c-num">10</span>, <span class="c-num">0</span>);
} <span class="c-key">catch</span> (runtime_error<span class="c-op">&amp;</span> e) {
    cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Error: "</span> <span class="c-op">&lt;&lt;</span> e.<span class="c-fn">what</span>();
} <span class="c-key">catch</span> (...) {
    cout <span class="c-op">&lt;&lt;</span> <span class="c-str">"Unknown error"</span>;
}</pre>
      </div>

      <div class="practice-questions">
        <h3>🧪 Practice Questions</h3>
        <ol>
          <li>Create a custom exception class for invalid age input.</li>
          <li>What is the difference between <code>throw</code> and <code>throw e</code>?</li>
          <li>Write a safe array access function using exceptions.</li>
          <li>What happens if exception is not caught? What is terminate()?</li>
        </ol>
      </div>
    `
  }
];