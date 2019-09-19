import React from 'react';
import { withTranslation } from "react-i18next";

function HomePageComp (props) {
  const { t } = props;
  const listOfPoems = t("listOfPoems", { returnObjects: true });
  return (
    <div>
      {listOfPoems.map(poem => (
        <div key={poem.title}>
          <h3>{poem.title}</h3>
          <p>{poem.paragraph}</p>
        </div>
      ))}
    </div>
  );
}

export const HomePage = withTranslation("homePage")(HomePageComp);