import alanBtn from "@alan-ai/alan-sdk-web";
import { useLayoutEffect, useState } from "react";

const alanKey =
  "84be8b666e82b0314c486716c22a85902e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewArticles] = useState();

  useLayoutEffect(() => {
    function updateScreen() {
      // Make visual updates here.
      alanBtn({
        key: alanKey,
        onCommand: (commandData: any) => {
          if (commandData?.command === "newHeadlines") {
            // Call the client code that will react to the received command
            setNewArticles(commandData?.articles);
          }
        },
      });
    }

    requestAnimationFrame(updateScreen);
  }, []);

  return <div>Alan AI Voice assistance application</div>;
};

export default App;
