import type { Chapter } from '../chapters.ts';

export const chapter1: Chapter = {
  id: 'chapter1',
  title: 'CHƯƠNG 1: ĐỐI TƯỢNG, PHƯƠNG PHÁP NGHIÊN CỨU VÀ CHỨC NĂNG CỦA KINH TẾ CHÍNH TRỊ MÁC - LÊNIN',
  sections: [
    {
      id: 'section1',
      title: 'I- KHÁI QUÁT SỰ HÌNH THÀNH VÀ PHÁT TRIỂN CỦA KINH TẾ CHÍNH TRỊ MÁC - LÊNIN',
      pages: [
        {
          id: 1,
          content:
            'Khái quát chung về sự đa dạng của tư tưởng, trường phái lý luận về kinh tế từ cổ đại đến nay.',
        },
        {
          id: 2,
          content:
            'Sự kế thừa sáng tạo các phạm trù, khái niệm khoa học trong Kinh tế chính trị Mác - Lênin dựa trên tiền đề lý luận và tổng kết thực tiễn.',
        },
        {
          id: 3,
          content:
            'Thuật ngữ “khoa học kinh tế chính trị” xuất hiện năm 1615 trong tác phẩm của Autoine de Montchrétien.',
        },
        {
          id: 4,
          content:
            'Adam Smith (thế kỷ XVIII) làm cho kinh tế chính trị chính thức trở thành môn học. Quá trình phát triển chia làm hai thời kỳ: từ cổ đại đến thế kỷ XVIII, và từ sau thế kỷ XVIII đến nay.',
        },
        {
          id: 5,
          content:
            'Các giai đoạn lý luận trước C. Mác: Chủ nghĩa trọng thương (giữa TK XV - giữa TK XVII) tập trung nghiên cứu lĩnh vực lưu thông và cho rằng lợi nhuận từ mua rẻ bán đắt.',
        },
        {
          id: 6,
          content:
            'Chủ nghĩa trọng nông (nửa cuối TK XVII - nửa đầu TK XVIII) tập trung nghiên cứu lĩnh vực sản xuất nhưng hạn chế khi cho rằng chỉ nông nghiệp mới là sản xuất.',
        },
        {
          id: 7,
          content:
            'Kinh tế chính trị cổ điển Anh (cuối TK XVIII - nửa đầu TK XIX) nghiên cứu quan hệ kinh tế trong quá trình tái sản xuất và kết luận giá trị do hao phí lao động tạo ra.',
        },
        {
          id: 8,
          content:
            'Hai dòng lý thuyết phát triển sau A. Smith: (1) Dòng khai thác luận điểm dựa trên tâm lý, hành vi (tạo cơ sở cho kinh tế học hiện đại); (2) Dòng kế thừa D. Ricardo, đi sâu phân tích quan hệ xã hội trong sản xuất (được C. Mác kế thừa).',
        },
        {
          id: 9,
          content:
            'C. Mác và Ph. Ăngghen xây dựng hệ thống lý luận kinh tế chính trị mang tính cách mạng, khoa học, toàn diện về phương thức sản xuất tư bản chủ nghĩa, tìm ra quy luật chi phối.',
        },
        {
          id: 10,
          content:
            'Lý luận của C. Mác tập trung trong bộ “Tư bản” với các học thuyết lớn như giá trị, giá trị thặng dư, tích lũy. V.I. Lênin tiếp tục phát triển với nghiên cứu về độc quyền và thời kỳ quá độ lên CNXH.',
        },
      ],
      quizzes: [
        {
          id: 1,
          question:
            'Tác phẩm nào đánh dấu sự xuất hiện của thuật ngữ “khoa học kinh tế chính trị” năm 1615?',
          options: ['Tuyên ngôn Cộng sản', 'Chuyên luận về kinh tế chính trị', 'Tư bản', 'Quốc phú'],
          correctAnswer: 1,
          explanation:
            'Thuật ngữ xuất hiện trong tác phẩm “Traicté de l’ oeconomie politique, dédié au Roy et à la Reyne mère du Roy” của Autoine de Montchrétien.',
        },
        {
          id: 2,
          question:
            'Ai là nhà kinh tế học người Anh ở thế kỷ XVIII đã đưa kinh tế chính trị chính thức trở thành môn học với các phạm trù chuyên ngành?',
          options: ['David Ricardo', 'Adam Smith', 'Thomas Mun', 'Pierre Boisguillebert'],
          correctAnswer: 1,
          explanation:
            'Với hệ thống lý luận của Adam Smith, kinh tế chính trị chính thức trở thành môn học.',
        },
        {
          id: 3,
          question: 'Chủ nghĩa trọng thương tập trung nghiên cứu lĩnh vực nào và lý giải nguồn gốc lợi nhuận từ đâu?',
          options: [
            'Sản xuất; nông nghiệp',
            'Lưu thông; thương nghiệp',
            'Sản xuất; lao động',
            'Lưu thông; sản xuất',
          ],
          correctAnswer: 1,
          explanation:
            'Chủ nghĩa trọng thương tập trung vào lưu thông và cho rằng lợi nhuận đến từ thương nghiệp (mua rẻ bán đắt).',
        },
        {
          id: 4,
          question: 'Chủ nghĩa trọng nông được hình thành và phát triển ở đâu?',
          options: ['Anh', 'Đức', 'Pháp', 'Ý'],
          correctAnswer: 2,
          explanation: 'Chủ nghĩa trọng nông hình thành và phát triển ở nước Pháp.',
        },
        {
          id: 5,
          question: 'Hạn chế lịch sử lớn nhất của chủ nghĩa trọng nông là gì?',
          options: [
            'Cho rằng lợi nhuận chỉ từ lưu thông',
            'Cho rằng chỉ có nông nghiệp mới là sản xuất',
            'Không nghiên cứu các phạm trù kinh tế',
            'Không chú ý đến giá trị sử dụng',
          ],
          correctAnswer: 1,
          explanation: 'Chủ nghĩa trọng nông nhận định chỉ có nông nghiệp mới là sản xuất.',
        },
        {
          id: 6,
          question:
            'Lý luận kinh tế chính trị cổ điển Anh kết thúc ở hệ thống lý luận của nhà kinh tế học nào?',
          options: ['William Petty', 'Adam Smith', 'David Ricardo', 'John Locke'],
          correctAnswer: 2,
          explanation:
            'Kinh tế chính trị cổ điển Anh kết thúc ở hệ thống lý luận của David Ricardo.',
        },
        {
          id: 7,
          question: 'Đóng góp khoa học lớn nhất của kinh tế chính trị cổ điển Anh là gì?',
          options: [
            'Phát hiện ra giá cả thị trường',
            'Kết luận giá trị là do hao phí lao động tạo ra',
            'Phân tích quan hệ xã hội trong sản xuất',
            'Phát hiện ra tiền tệ',
          ],
          correctAnswer: 1,
          explanation:
            'Kinh tế chính trị cổ điển Anh kết luận giá trị là do hao phí lao động tạo ra.',
        },
        {
          id: 8,
          question:
            'Sau David Ricardo, dòng lý thuyết nào tiếp tục đi sâu phân tích các quan hệ xã hội trong nền sản xuất?',
          options: [
            'Dòng lý thuyết dựa trên tâm lý, hành vi',
            'Dòng lý thuyết của C. Mác',
            'Kinh tế học tân cổ điển',
            'Kinh tế học Keynes',
          ],
          correctAnswer: 1,
          explanation:
            'C. Mác kế thừa trực tiếp những thành quả lý luận của D. Ricardo để phát triển lý luận kinh tế chính trị mang tên ông.',
        },
        {
          id: 9,
          question:
            'Lý luận kinh tế chính trị của C. Mác và Ph. Ăngghen được thể hiện tập trung nhất trong tác phẩm nào?',
          options: ['Luận cương về Feuerbach', 'Hệ tư tưởng Đức', 'Bộ Tư bản', 'Tuyên ngôn Cộng sản'],
          correctAnswer: 2,
          explanation: 'Hệ thống lý luận được trình bày tập trung trong bộ “Tư bản”.',
        },
        {
          id: 10,
          question:
            'Phát kiến vĩ đại nào của C. Mác tạo ra bước nhảy vọt so với D. Ricardo, làm tiền đề cho luận giải lý luận giá trị thặng dư?',
          options: [
            'Tính đối kháng giai cấp',
            'Tính hai mặt của lao động sản xuất hàng hóa',
            'Quy luật giá trị',
            'Quy luật cung cầu',
          ],
          correctAnswer: 1,
          explanation:
            'C. Mác phát hiện tính hai mặt của lao động sản xuất hàng hóa, làm cơ sở cho lý luận giá trị thặng dư.',
        },
        {
          id: 11,
          question:
            'Học thuyết nào của C. Mác là cơ sở khoa học luận chứng về vai trò lịch sử của phương thức sản xuất tư bản chủ nghĩa?',
          options: [
            'Học thuyết giá trị',
            'Học thuyết về lợi nhuận',
            'Học thuyết giá trị thặng dư',
            'Học thuyết về địa tô',
          ],
          correctAnswer: 2,
          explanation: 'Học thuyết giá trị thặng dư luận chứng vai trò lịch sử của chủ nghĩa tư bản.',
        },
        {
          id: 12,
          question:
            'V.I. Lênin đã có đóng góp khoa học nổi bật nào trong việc phát triển lý luận kinh tế chính trị Mác - Lênin?',
          options: [
            'Phát hiện tính hai mặt của lao động',
            'Nghiên cứu về độc quyền và thời kỳ quá độ lên CNXH',
            'Xây dựng lý luận về tái sản xuất giản đơn',
            'Nghiên cứu về chủ nghĩa trọng thương',
          ],
          correctAnswer: 1,
          explanation:
            'V.I. Lênin nghiên cứu độc quyền, độc quyền nhà nước và vấn đề thời kỳ quá độ lên CNXH.',
        },
        {
          id: 13,
          question:
            'Kinh tế chính trị Mác - Lênin được hình thành trên cơ sở nào?',
          options: [
            'Phủ định hoàn toàn các lý thuyết trước đó',
            'Kế thừa và phát triển những giá trị khoa học của nhân loại, trực tiếp là kinh tế chính trị tư sản cổ điển Anh',
            'Chỉ dựa trên tổng kết thực tiễn',
            'Chỉ dựa trên lý luận của D. Ricardo',
          ],
          correctAnswer: 1,
          explanation:
            'Kinh tế chính trị Mác - Lênin kế thừa và phát triển các giá trị khoa học trước đó, đặc biệt là kinh tế chính trị cổ điển Anh.',
        },
      ],
    },
    {
      id: 'section2',
      title:
        'II- ĐỐI TƯỢNG, MỤC ĐÍCH VÀ PHƯƠNG PHÁP NGHIÊN CỨU CỦA KINH TẾ CHÍNH TRỊ MÁC - LÊNIN',
      pages: [
        {
          id: 1,
          content:
            'Trước C. Mác: Chủ nghĩa trọng thương tìm đối tượng trong lưu thông; chủ nghĩa trọng nông trong nông nghiệp; kinh tế chính trị cổ điển trong sản xuất.',
        },
        {
          id: 2,
          content:
            'C. Mác và Ph. Ăngghen xác định đối tượng nghiên cứu của kinh tế chính trị là các quan hệ của sản xuất và trao đổi trong phương thức sản xuất mà các quan hệ đó hình thành và phát triển.',
        },
        {
          id: 3,
          content:
            'Quan niệm của A. Smith về kinh tế chính trị: hướng tới hai mục tiêu là tạo nguồn thu nhập dồi dào cho người dân và nguồn ngân sách đầy đủ cho nhà nước.',
        },
        {
          id: 4,
          content:
            'Theo nghĩa hẹp (C. Mác trong “Tư bản”): nghiên cứu quan hệ sản xuất và trao đổi trong một phương thức sản xuất nhất định (phương thức sản xuất tư bản chủ nghĩa).',
        },
        {
          id: 5,
          content:
            'Theo nghĩa rộng (Ph. Ăngghen): khoa học về những quy luật chi phối sự sản xuất và trao đổi những tư liệu sinh hoạt vật chất trong xã hội loài người; là môn khoa học có tính lịch sử.',
        },
        {
          id: 6,
          content:
            'Kinh tế chính trị không nghiên cứu biểu hiện kỹ thuật mà nghiên cứu hệ thống các quan hệ xã hội của sản xuất và trao đổi. V.I. Lênin nhấn mạnh chính trị kinh tế học nghiên cứu quan hệ xã hội trong sản xuất.',
        },
        {
          id: 7,
          content:
            'Đối tượng nghiên cứu tổng quát: các quan hệ xã hội của sản xuất và trao đổi, đặt trong liên hệ biện chứng với trình độ phát triển của lực lượng sản xuất và kiến trúc thượng tầng.',
        },
        {
          id: 8,
          content:
            'Mục đích nghiên cứu: phát hiện các quy luật chi phối quan hệ giữa người với người trong sản xuất và trao đổi, giúp các chủ thể vận dụng để thúc đẩy văn minh xã hội.',
        },
        {
          id: 9,
          content:
            'Mục đích của kinh tế chính trị Mác - Lênin không chỉ là thúc đẩy giàu có mà còn cung cấp cơ sở khoa học để thúc đẩy tiến bộ và phát triển xã hội toàn diện.',
        },
        {
          id: 10,
          content:
            'Quy luật kinh tế: mối liên hệ phản ánh bản chất, khách quan, lặp lại của các hiện tượng và quá trình kinh tế. Quy luật tồn tại khách quan, con người chỉ có thể nhận thức và vận dụng.',
        },
        {
          id: 11,
          content:
            'Phương pháp nghiên cứu: vận dụng phép biện chứng duy vật và nhiều phương pháp chuyên ngành thích hợp.',
        },
        {
          id: 12,
          content:
            'Phương pháp chủ yếu: trừu tượng hóa khoa học, giúp gạt bỏ yếu tố ngẫu nhiên để nhận diện bản chất và phát hiện tính quy luật.',
        },
      ],
      quizzes: [
        {
          id: 14,
          question:
            'Theo C. Mác và Ph. Ăngghen, đối tượng nghiên cứu của kinh tế chính trị là gì?',
          options: [
            'Lĩnh vực lưu thông',
            'Lĩnh vực sản xuất',
            'Các quan hệ của sản xuất và trao đổi trong phương thức sản xuất',
            'Kiến trúc thượng tầng',
          ],
          correctAnswer: 2,
          explanation:
            'Đối tượng của kinh tế chính trị là các quan hệ sản xuất và trao đổi trong một phương thức sản xuất nhất định.',
        },
        {
          id: 15,
          question: 'Theo V.I. Lênin, chính trị kinh tế học nghiên cứu điều gì?',
          options: [
            'Sự sản xuất',
            'Những quan hệ xã hội giữa người với người trong sản xuất',
            'Yếu tố vật chất của lực lượng sản xuất',
            'Biểu hiện cụ thể của kiến trúc thượng tầng',
          ],
          correctAnswer: 1,
          explanation:
            'V.I. Lênin nhấn mạnh chính trị kinh tế học nghiên cứu quan hệ xã hội giữa người với người trong sản xuất.',
        },
        {
          id: 16,
          question:
            'Đối tượng nghiên cứu của kinh tế chính trị Mác - Lênin cần đặt trong mối liên hệ với những yếu tố nào?',
          options: [
            'Quan hệ sở hữu và quan hệ quản lý',
            'Trình độ phát triển của lực lượng sản xuất và kiến trúc thượng tầng tương ứng',
            'Quan hệ phân phối và quan hệ tiêu dùng',
            'Quy luật kinh tế và chính sách kinh tế',
          ],
          correctAnswer: 1,
          explanation:
            'Đối tượng nghiên cứu phải gắn với trình độ lực lượng sản xuất và kiến trúc thượng tầng tương ứng.',
        },
        {
          id: 17,
          question:
            'Mục đích nghiên cứu ở cấp độ cao nhất của kinh tế chính trị Mác - Lênin là gì?',
          options: [
            'Xây dựng chính sách kinh tế phù hợp',
            'Phát hiện các quy luật chi phối quan hệ giữa người với người trong sản xuất và trao đổi',
            'Phân tích hành vi người tiêu dùng',
            'Luận giải về giá trị thặng dư',
          ],
          correctAnswer: 1,
          explanation:
            'Mục đích tối cao là phát hiện các quy luật chi phối quan hệ giữa người với người trong sản xuất và trao đổi.',
        },
        {
          id: 18,
          question: 'Quy luật kinh tế và chính sách kinh tế khác nhau ở điểm nào?',
          options: [
            'Quy luật kinh tế mang tính chủ quan, chính sách mang tính khách quan',
            'Quy luật kinh tế tồn tại khách quan, chính sách kinh tế do con người xây dựng',
            'Cả hai đều khách quan',
            'Cả hai đều chủ quan',
          ],
          correctAnswer: 1,
          explanation:
            'Quy luật kinh tế tồn tại khách quan; chính sách kinh tế là sản phẩm chủ quan của con người.',
        },
        {
          id: 19,
          question:
            'Phương pháp nghiên cứu nào được coi là chủ yếu của kinh tế chính trị Mác - Lênin?',
          options: [
            'Phép biện chứng duy vật',
            'Thống kê, so sánh',
            'Trừu tượng hóa khoa học',
            'Mô hình hóa',
          ],
          correctAnswer: 2,
          explanation:
            'Trừu tượng hóa khoa học là phương pháp chủ yếu do tính phức tạp của đối tượng nghiên cứu.',
        },
        {
          id: 20,
          question: 'Bản chất của phương pháp trừu tượng hóa khoa học là gì?',
          options: [
            'Tập trung vào mọi yếu tố của quá trình kinh tế',
            'Gạt bỏ những yếu tố ngẫu nhiên, tạm thời để nhận diện bản chất bền vững',
            'Sử dụng phòng thí nghiệm để quan sát',
            'Phân tích tổng hợp định lượng',
          ],
          correctAnswer: 1,
          explanation:
            'Trừu tượng hóa khoa học giúp loại bỏ yếu tố ngẫu nhiên để nhận diện bản chất và quy luật.',
        },
      ],
    },
    {
      id: 'section3',
      title: 'III- CHỨC NĂNG CỦA KINH TẾ CHÍNH TRỊ MÁC - LÊNIN',
      pages: [
        {
          id: 1,
          content:
            'Chức năng nhận thức: cung cấp tri thức lý luận về sự vận động của các quan hệ giữa người với người trong sản xuất và trao đổi, giúp nhận thức quy luật sâu sắc hơn.',
        },
        {
          id: 2,
          content:
            'Chức năng thực tiễn: vận dụng các quy luật kinh tế vào thực tiễn hoạt động lao động, quản trị quốc gia, góp phần thúc đẩy kinh tế - xã hội phát triển theo hướng tiến bộ.',
        },
        {
          id: 3,
          content:
            'Đối với sinh viên, môn học là cơ sở khoa học để nhận diện vai trò sáng tạo, xây dựng tư duy, tầm nhìn và kỹ năng thực hiện các hoạt động kinh tế - xã hội.',
        },
        {
          id: 4,
          content:
            'Chức năng tư tưởng: góp phần xây dựng nền tảng tư tưởng mới cho người lao động tiến bộ, củng cố niềm tin hướng tới mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.',
        },
        {
          id: 5,
          content:
            'Chức năng phương pháp luận: là nền tảng lý luận khoa học để nhận diện sâu hơn nội hàm khoa học của các khái niệm, phạm trù của các khoa học kinh tế chuyên ngành.',
        },
      ],
      quizzes: [
        {
          id: 21,
          question:
            'Chức năng nào giúp người học nhận thức được quy luật vận động của các hiện tượng kinh tế phức tạp?',
          options: ['Chức năng thực tiễn', 'Chức năng tư tưởng', 'Chức năng nhận thức', 'Chức năng phương pháp luận'],
          correctAnswer: 2,
          explanation:
            'Chức năng nhận thức cung cấp tri thức về các quy luật và tính quy luật của hiện tượng kinh tế.',
        },
        {
          id: 22,
          question:
            'Chức năng nào được thực hiện khi các quy luật kinh tế được vận dụng đúng để thúc đẩy phát triển kinh tế - xã hội?',
          options: ['Chức năng nhận thức', 'Chức năng thực tiễn', 'Chức năng tư tưởng', 'Chức năng phương pháp luận'],
          correctAnswer: 1,
          explanation:
            'Chức năng thực tiễn thể hiện qua việc vận dụng quy luật kinh tế vào hoạt động thực tiễn.',
        },
        {
          id: 23,
          question:
            'Kinh tế chính trị Mác - Lênin thể hiện chức năng phương pháp luận khi nào?',
          options: [
            'Khi nghiên cứu quan hệ sản xuất',
            'Khi cung cấp nền tảng lý luận cho các khoa học kinh tế chuyên ngành',
            'Khi xây dựng nền tảng tư tưởng',
            'Khi thúc đẩy văn minh xã hội',
          ],
          correctAnswer: 1,
          explanation:
            'Chức năng phương pháp luận thể hiện khi môn học cung cấp cơ sở lý luận cho các khoa học kinh tế chuyên ngành.',
        },
      ],
    },
  ],
};

