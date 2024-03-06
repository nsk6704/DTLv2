const quizData = [
  {
      question:
          "What is the time complexity of Dijkstra's algorithm?",
          a: "O(V log V)",
          b: "O(V^2)",
          c: "O(E + V log V)",
          d: "O(E + V)",
          correct: "c",
  },
  {
      question:
          "What is Bellman-Ford algorithm used for?  ",
          a: "Finding the shortest path between two nodes in a graph",
          b: "Detecting negative weight cycles in a graph",
          c: "Sorting data",
          d: "Creating graphs",
          correct: "b",
  },
  {
      question:
          "What data structure is typically used to implement Dijkstra's algorithm efficiently?",
          a: "Heap",
          b: "Array",
          c: "Linked list",
          d: "Stack",
          correct: "a",
  },
  {
    question: "What is the main drawback of using Dijkstra's algorithm?",
    a: "It doesn't work for graphs with negative weight edges",
    b: "It has a high time complexity",
    c: "It requires adjacency matrix representation of the graph",
    d: "It cannot handle disconnected graphs",
    correct: "a",
  },

  {
    question: "What is the space complexity of Floyd-Warshall algorithm?",
    a: "O(V^2)",
    b: "O(V^3)",
    c: "O(V log V)",
    d: "O(E + V)",
    correct: "b",
  },

   {
    question: "Which algorithm can handle negative weight edges without issue?",
    a: "Dijkstra's algorithm",
    b: "Bellman-Ford algorithm",
    c: "Floyd-Warshall algorithm",
    d: "Prim's algorithm",
    correct: "b",
  },

  {
    question: "What does the term 'negative weight cycle' mean in the context of graphs?",
    a: "A cycle in the graph where the sum of edge weights is negative",
    b: "A cycle in the graph where the sum of edge weights is positive",
    c: "A cycle in the graph where all edges have the same weight",
    d: "A cycle in the graph where all edges have zero weight",
    correct: "a",
  },

  {
    question:
        "In graph theory, what is a node also known as?",
    a: "Vertex",
    b: "Edge",
    c: "Graph",
    d: "Cycle",
    correct: "a",
},
{
    question:
        "What is the maximum number of edges in a complete graph with n vertices?",
    a: "n",
    b: "n - 1",
    c: "n^2",
    d: "n(n-1)/2",
    correct: "d",
},
{
    question:
        "A graph with all edges having the same weight is called:",
    a: "Weighted graph",
    b: "Connected graph",
    c: "Complete graph",
    d: "Uniform graph",
    correct: "d",
},
{
  question: "What is the term used to describe a graph with no cycles?",
  a: "Acyclic graph",
  b: "Bipartite graph",
  c: "Directed graph",
  d: "Tree",
  correct: "a",
},
{
  question: "What is the degree of a vertex in a graph?",
  a: "The number of edges connected to the vertex",
  b: "The weight of the edges connected to the vertex",
  c: "The number of nodes connected to the vertex",
  d: "The length of the shortest path from the vertex",
  correct: "a",
},
{
  question: "What is the minimum number of edges in a connected graph with n vertices?",
  a: "n - 1",
  b: "n",
  c: "1",
  d: "0",
  correct: "a",
},
{
  question: "What is the name of a graph in which each edge is associated with a direction?",
  a: "Undirected graph",
  b: "Directed graph",
  c: "Connected graph",
  d: "Cyclic graph",
  correct: "b",
},
{
  question: "What is the term for a graph in which all vertices are connected by exactly one edge?",
  a: "Complete graph",
  b: "Simple graph",
  c: "Path graph",
  d: "Cycle graph",
  correct: "c",
},
{
  question: "What is the maximum number of edges in a tree with n vertices?",
  a: "n - 1",
  b: "n",
  c: "n + 1",
  d: "2n - 1",
  correct: "a",
},
];

const quiz = document.querySelector(".quiz-header");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  if (currentQuiz < quizData.length) {
      questionEl.innerText = quizData[currentQuiz].question;
      a_text.innerText = quizData[currentQuiz].a;
      b_text.innerText = quizData[currentQuiz].b;
      c_text.innerText = quizData[currentQuiz].c;
      d_text.innerText = quizData[currentQuiz].d;
  } else {
      quiz.innerText = `Your Score is ${score}`;
      submitBtn.innerText = "Restart";
  }
}

function deselectAnswers() {
  answerEls.forEach((e) => {
      e.checked = false;
  });
  loadQuiz();
}

function getSelected() {
  answerEls.forEach((e) => {
      if (e.checked) {
          if (e.id == quizData[currentQuiz].correct) {
              score++;
          }
      }
  });

  currentQuiz++;
  deselectAnswers();
}

submitBtn.addEventListener("click", () => {

  if (currentQuiz < quizData.length) {
      getSelected();
  }
  else {
      location.reload();
  }
});
