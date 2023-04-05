import Layout from "./layout";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
const App = () => {
  return (
    <Layout>
      <h1>POST</h1>
      <PostCreate />
      <hr />
      <PostList />
    </Layout>
  );
};
export default App;
