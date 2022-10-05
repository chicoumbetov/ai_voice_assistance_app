import { Grid, Grow } from "@material-ui/core";
import NewsCard from "../NewsCard/NewsCard";

type NewsCardProps = {
  name: string;
};

const NewsCards = (articles: any) => {
  console.log("articles : ", articles);

  return (
    <Grow in>
      <Grid container alignItems="stretch" spacing={3}>
        {articles?.articles?.map((article: any, i: number) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard key={article.id} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
