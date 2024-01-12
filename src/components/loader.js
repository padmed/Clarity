import { LOADER_CLASSNAME } from "../utils/constants";

const createLoader = () => {
  const loader = document.createElement("div");
  loader.className = LOADER_CLASSNAME;

  return loader;
};

export const getLoaderStyles = () => {
  return `
  .${LOADER_CLASSNAME} {
  width: 35px;
  aspect-ratio: 1;
  display: grid;
  transition: all linear 0.1s;
  position: absolute;
  top: 80px;
  left: 160px;

}
.${LOADER_CLASSNAME}:before,
.${LOADER_CLASSNAME}:after {
  content: "";
  grid-area: 1/1;
  border-radius: 50%;
  background: #FFFFFF;
  -webkit-mask:repeating-linear-gradient(#000 0 5px,#0000 0 10px);
  animation: l35 1.5s infinite;
}
.${LOADER_CLASSNAME}:after {
  -webkit-mask:repeating-linear-gradient(#0000 0 5px,#000 0 10px);
  --s:-1;
}
@keyframes l35 {
  0%,
  10% {transform: translate(0) rotate(0)}
  35% {transform: translate(calc(var(--s,1)*50%)) rotate(0)}
  66% {transform: translate(calc(var(--s,1)*50%)) rotate(calc(var(--s,1)*180deg))}
  90%,
  100% {transform: translate(0) rotate(calc(var(--s,1)*180deg))}
}`;
};

export default createLoader;
