import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { withTranslation, Trans } from "react-i18next";

function Language(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose(idiomSelected) {
    const { i18n } = props;
    switch(idiomSelected) {
      case "es": i18n.changeLanguage("es"); break;
      default: i18n.changeLanguage("en"); break;
    }
    setAnchorEl(null);
  }
  const { t, i18n } = props;
  return (
    <div className="idiomBtn">
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Trans>{t("language")}</Trans>
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleClose("en")}>
          <Trans>{t("en")}</Trans>
        </MenuItem>
        <MenuItem onClick={() => handleClose("es")}>
          <Trans>{t("es")}</Trans>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default withTranslation("navMenu")(Language);