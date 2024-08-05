type AnimationState = "before-animation" | "animating" | "after-animation";

declare module "fake-animation-lib" {
  function getAnimatingState(): AnimationState;
}
