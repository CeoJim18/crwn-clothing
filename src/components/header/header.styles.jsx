import styled from "styled-components";

import {Link} from 'react-router-dom';


/*const OptionsContainerStyles=css`
padding: 10px 15px;
cursor:pointer;

`die css geeft dus aan dat het algemeen is...niet een bepaalde component dus..dat is css block 
*/
export const HeaderContainer=styled.div`
height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer=styled(Link)`
height: 100%;
width: 70px;
padding: 25px;
`;

export const OptionsContainer=styled.div`
width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;

export const OptionLink=styled(Link)`
padding: 10px 15px;
cursor:pointer;
`;

//Boven bij link zet je Link wle tussen haakjes bij styled, omdat Link niet iets standard is van html
