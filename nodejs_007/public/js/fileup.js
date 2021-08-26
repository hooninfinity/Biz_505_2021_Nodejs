// JS 함수선언
const fileUpfetch = (files, editer) => {
  const formData = new FormData();
  formData.append("file", files[0]);

  alert(files[0].originalFileName);

  fetch("/file/fileUp", {
    method: "POST",
    body: formData,
  })
    .then((res) => result.json)
    .then((result) => console.log(result));
};

const fileUpAjax = (files, editor) => {
  const formData = new FormData();
  formData.append("file", files[0]);

  // jquery 의 ajax 함수를 사용하여
  // file Upload 하기
  $.fileUpAjax({
    url: "/file/fileUp",
    data: formData,
    type: "POST",
    processData: false,
    contentType: false,
  });
};
