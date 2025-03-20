const quest = [
    {
      text: "học dom js",
    },
    {
      text: "làm bài tập dom js",
    },
  ];
  
  // Phạm vi truy xuất cac phần tử trong DOM
  const tbodyElement = document.querySelector("#tbody");
  const formElement = document.querySelector("#form");
  function renderData() {
    const htmls = quest.map((student, index) => {
      return `
                <tr style="border-bottom: 1px solid gainsboro;display:flex;justify-content: space-between">
                  <td >${student.text}</td>
                  <td>
                    <button style="background-color:red;border:none" onclick="handleDelete(${index})">X</button>
                  </td>
                </tr>
            `;
    });
  
    // Chuyển đổi mảng thành chuỗi
    const convertArrayToString = htmls.join("");
  
    // Append chuỗi HTML vào trong DOM
    tbodyElement.innerHTML = convertArrayToString;
  }
  
  // Hàm xóa sinh viên theo id
  function handleDelete(index) {
    const confrimDelete = confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này");
  
    if (confrimDelete) {
      // Tiến hành xóa
      quest.splice(index, 1);
  
      // Gọi hàm renderData để cập nhật lại dữ liệu mới nhất
      renderData();
    }
  }
  
  // Hàm làm rỗng tất cả các giá trị trong input
  function handleReseForm() {
    document.querySelector("#textMore").value = "";
  }
  
  const handleAddQuest = () => {
    // Lấy dữ liệu từ Form
    const textMore = document.querySelector("#textMore").value;
    // Validate dữ liệu
    // Thêm dữ liệu vào mảng
    const newQuest = {
      text: textMore,
    };
  
    quest.push(newQuest);
  
    //   Reset form
    handleReseForm();
  
    // Reder lại dữ liệu  mới nhất cho giao diện
    renderData();
  };
  
  // Gọi sự kiện Submit form
  formElement.addEventListener("submit", function (event) {
    // Ngăn chặn sự kiện load lại trang
    event.preventDefault();
  
    handleAddQuest();
  });
  
  renderData();