pragma solidity ^0.4.21;

import { Jurisdiction } from "./tpl-contracts/Jurisdiction.sol";

contract Validator {

  Jurisdiction jurisdiction;

  function Validator(Jurisdiction _jurisdiction) public {
    jurisdiction = _jurisdiction;
  }

  // There should be a function that reads or gets a message from
  // our backend and adds
  function validate() public {
    jurisdiction.addAttribute(msg.sender, "VALID", 1);
  }

}
