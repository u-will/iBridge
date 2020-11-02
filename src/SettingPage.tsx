import React from "react";
import { pages } from "./App";

interface SettingPageScreenProps {
  changePage: (page: pages) => void;
}

export class SettingPage extends React.Component<SettingPageScreenProps> {
  render() {
    return (
      <div>
        <h1>Setting</h1>
      </div>
    );
  }
}