import * as yup from "yup";

export const RobotsAdd = yup.object().shape({
  image: yup.string().required(),
  name: yup.string().required(),
  title: yup.string().required(),
});
