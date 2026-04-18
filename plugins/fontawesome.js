import Vue from "vue";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faCode,
  faBriefcase,
  faSchool,
  faPuzzlePiece,
  faPhone,
  faEnvelope,
  faLink
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(
  faUser,
  faCode,
  faBriefcase,
  faSchool,
  faPuzzlePiece,
  faPhone,
  faEnvelope,
  faLink
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
