const OpenModal = document.querySelector(".btn")
  const Bgmodal = document.querySelector("#modal-background")
  const ModalBox = document.querySelector(".modal-box")
  OpenModal.addEventListener("click",function(event)
  {
    event.preventDefault()
    Bgmodal.classList.add("active")
    ModalBox.classList.add("active")
  })
  const CloseBtn = document.querySelectorAll(".js-close")
  CloseBtn.forEach(element=>
  {
    element.addEventListener("click",function(event)
    {
      Bgmodal.classList.remove("active")
    ModalBox.classList.remove("active")
    })
  }
  )