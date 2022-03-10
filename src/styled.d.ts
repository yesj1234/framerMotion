// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    cardColor: string;
    bgColor: string;
    boardColor: string;
    textColor: string;
  }
}
