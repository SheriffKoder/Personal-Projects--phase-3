

export const scaleAnimation = (projectId) => {
    const image = document.querySelector(`#${projectId}`);
    if (image) {
      if (image.classList.contains("image_scaleIn_animation"))
      {
        image.classList.remove("image_scaleIn_animation");
        image.classList.add("image_scaleOut_animation");
      }
      else if (image.classList.contains("image_scaleOut_animation") ||
      (!image.classList.contains("image_scaleIn_animation") && 
      !image.classList.contains("image_scaleOut_animation"))) {
        image.classList.remove("image_scaleOut_animation");
        image.classList.add("image_scaleIn_animation");
      }

    }
  }