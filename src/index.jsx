import ForgeUI, {
  render,
  Fragment,
  Text,
  IssuePanel,
  useState,
  useProductContext,
  Button,
  StatusLozenge,
  Tooltip,
} from "@forge/ui";
import api, { route } from "@forge/api";

import Sentiment from "sentiment";

const fetchDescriptionFromIssue = async (issueId) => {
  const res = await api
    .asApp()
    .requestJira(
      route`/rest/api/2/issue/${issueId}?fields=summary,description`
    );

  const { summary, description } = (await res.json()).fields;

  return description;
};

const Issue = (props) => {
  if (props.description) {
    return (
      <Fragment>
        <Text>{props.description}</Text>
      </Fragment>
    );
  } else {
    return <Text>There is no open issue for this page</Text>;
  }
};

const App = () => {
  const {
    platformContext: { issueKey },
  } = useProductContext();

  async function fetchdescription() {
    const description = await fetchDescriptionFromIssue(issueKey);
    return description
  }

  const [issue, setIssue] = useState(() => fetchdescription());

  const [sentiment, setSentiment] = useState(null);

  const fetchSentiment = async (description) => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(description);
    setSentiment(result);
  };

  return (
    <Fragment>
    <Tooltip text="Refresh to fetch description">
    <Button icon="refresh" onClick={() => setIssue(fetchdescription())} />
    </Tooltip>
      <Button text={"Sentiment analysis"} onClick={() => fetchSentiment(issue)} />
      <Text>Description Text: {issue}</Text>
      {sentiment !== null ? (
        <Fragment>
          <Fragment>
            <Text>Do you sound positive?</Text>
            <Text>
              {sentiment.score > 0
                ? `Yes, with a score of ${sentiment.score}`
                : `No,with a score of ${sentiment.score} `}
            </Text>
          </Fragment>
          {sentiment.positive && (
            <Fragment>
            <Text>
              Here are all the positive words:{" "}
            </Text>
            <Text>
              {sentiment.positive.map((word) => (
                <StatusLozenge appearance="success" key={word} text={word} />
              ))}
            </Text>
            
            </Fragment>
            
          )}
          {sentiment.negative && (
            <Fragment>
            <Text>
              Here are all the negative words:{" "}
            </Text>
            <Text>
              {sentiment.negative.map((word) => (
                <StatusLozenge appearance="removed" key={word} text={word} />
              ))}
            </Text>
            </Fragment>
            
          )}
        </Fragment>
      ) : (
        <Text>Something went wrong</Text>
      )}
    </Fragment>
  );
};

/**
 * Checks if a response was successful, and log and throw an error if not.
 * Also logs the response body if the DEBUG_LOGGING env variable is set.
 * @param apiName a human readable name for the API that returned the response object
 * @param response a response object returned from `api.fetch()`, `requestJira()`, or similar
 */
async function checkResponse(apiName, response) {
  if (!response.ok) {
    const message = `Error from ${apiName}: ${
      response.status
    } ${await response.text()}`;
    console.error(message);
    throw new Error(message);
  } else if (process.env.DEBUG_LOGGING) {
    console.debug(`Response from ${apiName}: ${await response.text()}`);
  }
}

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
