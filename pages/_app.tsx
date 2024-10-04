import { PanelProvider } from "@component/layout";

import type { NextPage } from "next";
import App, { AppContext, AppInitialProps } from "next/app";
import { ReactElement } from "react";
import { ColorScheme } from "@mantine/core";
import { getCookie } from "cookies-next";

type AppInitialPropsWithColor = AppInitialProps & {
  Component: NextPage;
  colorScheme: ColorScheme;
};

export default class Panel extends App<AppInitialPropsWithColor> {
  /*static async getInitialProps(
    appContext: AppContext,
  ): Promise<AppInitialProps & { colorScheme: ColorScheme }> {
    const appProps: AppInitialProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      colorScheme: getCookie("color-scheme", appContext.ctx) as ColorScheme,
    };
  }*/

  render(): ReactElement {
    const { Component, pageProps }: AppInitialPropsWithColor = this.props;
    const colorScheme: ColorScheme =
      this.props?.colorScheme || (getCookie("color-scheme") as ColorScheme);

    return (
      <PanelProvider colorScheme={colorScheme}>
        <Component {...pageProps} />
      </PanelProvider>
    );
  }
}
