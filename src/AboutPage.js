import React from 'react';
import { withTranslation } from "react-i18next";

function AboutPageComp (props) {
  const { t } = props;
  return (
    <div>
      <h3>{t("title")}</h3>
      <p>{t("description")}</p>
    </div>
  );
}

export const AboutPage = withTranslation("aboutPage")(AboutPageComp);