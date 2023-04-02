import React, { useState } from "react";
import { FormField, Loader, Card } from "../Components";

const RenderCards = ({ data, title }) => {
  if (data.length > 0) {
    return data.map((posts) => <Card key={posts._id} {...posts} />);
  }
  return <h3>{title}</h3>;
};
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("asd");

  return (
    <>
      <section className="home_container">
        <div>
          <h1>Browse collection</h1>
          <p className="browser_collection">
            Browse collection of imaginative and visually stunning images
            created by Dall-E AI
          </p>
        </div>
        <div className="form_fieldContainer">
          <FormField />
        </div>

        <div className="loading_container">
          {loading ? (
            <div>
              <Loader />
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <p>search result</p> <h3>{searchText}</h3>
            </div>
          )}
        </div>
        <div>
          {searchText ? (
            <RenderCards data={[]} title="No search result found" />
          ) : (
            <RenderCards data={[]} title="No post found"/>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
