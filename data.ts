
import { Chapter } from './types';

export const textbookData: Chapter[] = [
  {
    id: 'c1',
    title: 'Chương 1: Vật Lí Nhiệt',
    lessons: [
      {
        id: 'l1',
        title: 'Bài 1: Sự chuyển thể',
        summary: [
          '**1. Mô hình động học phân tử:**\n Vật chất được cấu tạo từ các hạt riêng biệt gọi là phân tử. Các phân tử chuyển động hỗn loạn không ngừng. Nhiệt độ của vật càng cao thì tốc độ chuyển động trung bình của các phân tử càng lớn. Giữa các phân tử có lực tương tác (hút và đẩy). Độ lớn lực này phụ thuộc vào khoảng cách giữa các phân tử.',
          '**2. Cấu trúc của chất rắn:**\n Các phân tử ở rất gần nhau và sắp xếp có trật tự chặt chẽ (mạng tinh thể). Lực tương tác giữa các phân tử rất mạnh, giữ cho chúng chỉ dao động quanh các vị trí cân bằng xác định. Do đó, chất rắn có thể tích và hình dạng xác định, rất khó nén.',
          '**3. Cấu trúc của chất lỏng:**\n Các phân tử ở gần nhau nhưng không chặt chẽ bằng chất rắn. Lực tương tác yếu hơn so với chất rắn nên các phân tử có thể di chuyển trượt lên nhau. Chất lỏng có thể tích xác định nhưng không có hình dạng riêng (chiếm hình dạng của bình chứa).',
          '**4. Cấu trúc của chất khí:**\n Các phân tử ở rất xa nhau (khoảng cách lớn gấp hàng chục lần kích thước phân tử). Lực tương tác rất yếu (chỉ đáng kể khi va chạm). Các phân tử chuyển động hoàn toàn hỗn loạn về mọi phía. Chất khí không có hình dạng và thể tích riêng (chiếm toàn bộ thể tích bình chứa) và rất dễ nén.',
          '**5. Sự chuyển thể:**\n- **Sự nóng chảy:** Quá trình chuyển từ thể rắn sang thể lỏng. Với chất rắn kết tinh, quá trình này diễn ra ở một nhiệt độ xác định gọi là nhiệt độ nóng chảy. Trong suốt thời gian nóng chảy, nhiệt độ vật không đổi.\n- **Sự đông đặc:** Quá trình ngược lại của nóng chảy (lỏng sang rắn).\n- **Sự hoá hơi:** Quá trình chuyển từ thể lỏng sang thể khí, bao gồm sự bay hơi (trên mặt thoáng) và sự sôi (trong lòng chất lỏng và trên mặt thoáng).\n- **Sự ngưng tụ:** Quá trình chuyển từ thể khí sang thể lỏng.'
        ],
        formulas: [
          { name: 'Nhiệt nóng chảy', expression: '$Q = m\\lambda$', note: '$\\lambda$: nhiệt nóng chảy riêng (J/kg), $m$: khối lượng (kg)' },
          { name: 'Nhiệt hoá hơi', expression: '$Q = mL$', note: '$L$: nhiệt hoá hơi riêng (J/kg), $m$: khối lượng (kg)' }
        ],
        exercises: [
          {
            id: 'ex1',
            question: 'Tính nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn 50g thiếc hàn ở nhiệt độ nóng chảy. Biết loại thiếc hàn là hỗn hợp thiếc-chì 63:37.',
            solution: 'Giả sử tính cho thiếc nguyên chất để minh họa công thức.\n\nKhối lượng $m = 50\\text{g} = 0.05 \\text{ kg}$.\nNhiệt nóng chảy riêng $\\lambda \\approx 0.61 \\times 10^5$ J/kg (giá trị ví dụ).\n\nÁp dụng công thức:\n$$Q = m\\lambda = 0.05 \\times 0.61 \\times 10^5 = 3050 \\text{ J}$$'
          },
          {
            id: 'ex1_2',
            question: 'Một khối nước đá $m = 2\\text{ kg}$ ở $0^\\circ C$. Cần cung cấp nhiệt lượng bao nhiêu để nó tan chảy hoàn toàn?',
            solution: 'Nhiệt nóng chảy riêng của nước đá $\\lambda = 3.34 \\times 10^5$ J/kg.\n\n$$Q = m\\lambda = 2 \\times 3.34 \\times 10^5 = 6.68 \\times 10^5 \\text{ J}$$'
          }
        ],
        quizzes: [
          {
            id: 'q1',
            question: 'Đặc điểm nào sau đây **không** phải của chất khí?',
            options: [
              'Lực tương tác phân tử rất yếu.',
              'Có hình dạng và thể tích xác định.',
              'Phân tử chuyển động hỗn loạn.',
              'Dễ nén.'
            ],
            correctIndex: 1,
            explanation: 'Chất khí không có hình dạng và thể tích riêng (xác định), nó chiếm toàn bộ thể tích bình chứa.'
          },
          {
            id: 'q2',
            question: 'Công thức tính nhiệt lượng cần cung cấp để vật rắn nóng chảy hoàn toàn ở nhiệt độ nóng chảy là:',
            options: [
              '$Q = mc\\Delta t$',
              '$Q = mL$',
              '$Q = m\\lambda$',
              '$Q = R I^2$'
            ],
            correctIndex: 2,
            explanation: '$Q = m\\lambda$ là công thức tính nhiệt nóng chảy.'
          },
          {
            id: 'q3',
            question: 'Đơn vị của nhiệt nóng chảy riêng $\\lambda$ là:',
            options: [
              'J/kg.K',
              'J',
              'J/kg',
              'kg/J'
            ],
            correctIndex: 2,
            explanation: 'Từ $Q=m\\lambda \\Rightarrow \\lambda = Q/m$ (J/kg).'
          }
        ]
      },
      {
        id: 'l2',
        title: 'Bài 2: Thang nhiệt độ',
        summary: [
          '**1. Khái niệm nhiệt độ:**\n Nhiệt độ là đại lượng vật lý đặc trưng cho mức độ nóng, lạnh của một vật. Trong mô hình động học phân tử, nhiệt độ tỉ lệ thuận với động năng trung bình của các phân tử cấu tạo nên vật (vật càng nóng, phân tử chuyển động càng nhanh).',
          '**2. Thang nhiệt độ Celsius (Celcius):**\n Ký hiệu là $^\\circ C$. Quy ước nhiệt độ của nước đá đang tan là $0^\\circ C$ và nhiệt độ của hơi nước đang sôi (ở áp suất tiêu chuẩn 1 atm) là $100^\\circ C$. Khoảng cách giữa hai điểm này chia làm 100 phần bằng nhau.',
          '**3. Thang nhiệt độ Kelvin (Tuyệt đối):**\n Ký hiệu là K. Đây là đơn vị cơ bản của nhiệt độ trong hệ SI.\n- Độ không tuyệt đối ($0 \\text{ K}$): Là giới hạn thấp nhất của nhiệt độ trong vũ trụ, tại đó động năng chuyển động nhiệt của các phân tử bằng 0 (về mặt lý thuyết).\n- Một độ chia trong thang Kelvin bằng một độ chia trong thang Celsius ($\\Delta T = \\Delta t$).',
          '**4. Chuyển đổi đơn vị:**\n Mối liên hệ giữa nhiệt độ $t$ ($^\\circ C$) và $T$ ($K$):\n $$T = t + 273.15$$\n (Trong các bài tập phổ thông thường lấy gần đúng $T = t + 273$).'
        ],
        formulas: [
          { name: 'Đổi từ Celsius sang Kelvin', expression: '$T(K) = t(^\\circ C) + 273.15$', note: 'Thường lấy gần đúng +273' },
          { name: 'Đổi từ Kelvin sang Celsius', expression: '$t(^\\circ C) = T(K) - 273.15$', note: '' },
          { name: 'Độ biến thiên nhiệt độ', expression: '$\\Delta T(K) = \\Delta t(^\\circ C)$', note: '' }
        ],
        exercises: [
          {
            id: 'ex2',
            question: 'Một khối khí ở nhiệt độ $27^\\circ C$. Tính nhiệt độ này trong thang Kelvin.',
            solution: 'Áp dụng công thức:\n$$T = t + 273 = 27 + 273 = 300 \\text{ K}$$'
          }
        ],
        quizzes: [
          {
            id: 'q2_1',
            question: 'Giá trị $0 \\text{ K}$ trong thang nhiệt độ Kelvin tương ứng với bao nhiêu độ trong thang Celsius?',
            options: ['$0^\\circ C$', '$273^\\circ C$', '$-273.15^\\circ C$', '$100^\\circ C$'],
            correctIndex: 2,
            explanation: '$t = T - 273.15 = 0 - 273.15 = -273.15^\\circ C$.'
          },
          {
            id: 'q2_2',
            question: 'Đặc điểm của độ không tuyệt đối là gì?',
            options: [
              'Nước bắt đầu đóng băng.',
              'Động năng chuyển động nhiệt của phân tử bằng 0.',
              'Áp suất khí quyển bằng 0.',
              'Tất cả các chất đều hoá lỏng.'
            ],
            correctIndex: 1,
            explanation: 'Tại $0 \\text{ K}$, chuyển động nhiệt của các phân tử dừng lại (về lý thuyết).'
          }
        ]
      },
      {
        id: 'l3',
        title: 'Bài 3: Nội năng. Định luật 1 NĐLH',
        summary: [
          '**1. Nội năng (U):**\n Nội năng của một vật là tổng động năng (do chuyển động nhiệt) và thế năng tương tác (do lực liên kết) của các phân tử cấu tạo nên vật. Nội năng $U$ phụ thuộc vào nhiệt độ $T$ và thể tích $V$ của vật: $U = f(T, V)$. Với khí lý tưởng, nội năng chỉ phụ thuộc vào nhiệt độ.',
          '**2. Các cách làm thay đổi nội năng:**\n- **Thực hiện công ($A$):** Ví dụ: nén khí trong xi lanh, cọ xát vật (chuyển hóa cơ năng thành nội năng).\n- **Truyền nhiệt ($Q$):** Ví dụ: đun nóng nước, để vật nóng tiếp xúc vật lạnh (chuyển năng lượng nhiệt từ vật này sang vật khác).',
          '**3. Định luật 1 Nhiệt động lực học:**\n Độ biến thiên nội năng của vật bằng tổng công và nhiệt lượng mà vật nhận được:\n $$\\Delta U = A + Q$$',
          '**4. Quy ước về dấu (Rất quan trọng):**\n- $Q > 0$: Vật **nhận** nhiệt lượng (thu nhiệt).\n- $Q < 0$: Vật **truyền** nhiệt lượng (tỏa nhiệt).\n- $A > 0$: Vật **nhận** công (bị nén, bị lực ngoài tác dụng công dương).\n- $A < 0$: Vật **thực hiện** công (sinh công, dãn nở đẩy vật khác).'
        ],
        formulas: [
          { name: 'Định luật 1 NĐLH', expression: '$\\Delta U = A + Q$', note: 'Chú ý quy ước dấu của A và Q' },
          { name: 'Nhiệt lượng (tỏa/thu)', expression: '$Q = mc\\Delta t$', note: '$c$: nhiệt dung riêng (J/kg.K)' }
        ],
        exercises: [
          {
            id: 'ex3',
            question: 'Cung cấp cho vật một công 200 J nhưng vật toả nhiệt ra môi trường 120 J. Nội năng vật tăng hay giảm bao nhiêu?',
            solution: 'Ta có:\n* Nhận công: $A = +200 \\text{ J}$ (vì vật nhận công).\n* Toả nhiệt: $Q = -120 \\text{ J}$ (vì vật tỏa nhiệt).\n\nÁp dụng định luật 1 NĐLH:\n$$\\Delta U = A + Q = 200 + (-120) = 80 \\text{ J}$$\n\nVì $\\Delta U > 0$ nên nội năng của vật **tăng** 80 J.'
          }
        ],
        quizzes: [
          {
            id: 'q3_1',
            question: 'Trong biểu thức $\\Delta U = A + Q$, trường hợp nào sau đây ứng với quá trình vật nhận công và toả nhiệt?',
            options: [
              '$A > 0, Q > 0$',
              '$A > 0, Q < 0$',
              '$A < 0, Q > 0$',
              '$A < 0, Q < 0$'
            ],
            correctIndex: 1,
            explanation: 'Nhận công là $A > 0$, toả nhiệt là $Q < 0$.'
          },
          {
            id: 'q3_2',
            question: 'Nội năng của một vật phụ thuộc vào các yếu tố nào?',
            options: [
              'Nhiệt độ và khối lượng.',
              'Thể tích và áp suất.',
              'Nhiệt độ và thể tích.',
              'Vận tốc và độ cao của vật.'
            ],
            correctIndex: 2,
            explanation: 'Nội năng phụ thuộc vào nhiệt độ (động năng phân tử) và thể tích (thế năng tương tác).'
          }
        ]
      }
    ]
  },
  {
    id: 'c2',
    title: 'Chương 2: Khí Lí Tưởng',
    lessons: [
      {
        id: 'l5',
        title: 'Bài 5: Thuyết động học phân tử chất khí',
        summary: [
          '**1. Chuyển động Brown:**\n Là chuyển động hỗn loạn, không ngừng của các hạt nhỏ (cỡ micromet) trong chất lỏng hoặc chất khí. Nguyên nhân là do sự va chạm không cân bằng của các phân tử môi trường lên hạt. Điều này chứng tỏ các phân tử vật chất luôn chuyển động hỗn loạn không ngừng.',
          '**2. Chất khí và lượng chất:**\n- Chất khí có tính bành trướng, dễ nén, có khối lượng riêng nhỏ.\n- **Lượng chất (mol):** 1 mol là lượng chất chứa số hạt bằng số nguyên tử trong 12g carbon-12.\n- **Số Avogadro:** $N_A \\approx 6.02 \\times 10^{23} \\text{ hạt/mol}$.\n- **Khối lượng mol (M):** Khối lượng của 1 mol chất đó (g/mol).',
          '**3. Nội dung thuyết động học phân tử chất khí:**\n- Chất khí gồm các phân tử có kích thước rất nhỏ so với khoảng cách giữa chúng.\n- Các phân tử chuyển động hỗn loạn không ngừng. Nhiệt độ càng cao, chuyển động càng nhanh.\n- Khi chuyển động, các phân tử va chạm với nhau và va chạm với thành bình. Sự va chạm vào thành bình gây ra áp suất của chất khí.',
          '**4. Khí lí tưởng:**\n Là khí mà các phân tử được coi là chất điểm và chỉ tương tác với nhau khi va chạm.'
        ],
        formulas: [
          { name: 'Số mol', expression: '$n = \\frac{N}{N_A} = \\frac{m}{M}$', note: '$N$: số hạt, $m$: khối lượng (g), $M$: khối lượng mol' },
          { name: 'Khối lượng 1 phân tử', expression: '$m_0 = \\frac{M}{N_A}$', note: '' }
        ],
        exercises: [
          {
            id: 'ex5',
            question: 'Tính số phân tử có trong 1g khí Hydrogen ($H_2$). Biết $M_{H_2} = 2 \\text{ g/mol}$.',
            solution: 'Số mol khí Hydrogen:\n$$n = \\frac{m}{M} = \\frac{1}{2} = 0.5 \\text{ mol}$$\n\nSố phân tử:\n$$N = n \\cdot N_A = 0.5 \\times 6.02 \\times 10^{23} = 3.01 \\times 10^{23} \\text{ phân tử}$$'
          }
        ],
        quizzes: [
          {
            id: 'q5_1',
            question: 'Nguyên nhân gây ra áp suất của chất khí lên thành bình là gì?',
            options: [
              'Do lực liên kết giữa các phân tử.',
              'Do trọng lượng của chất khí.',
              'Do các phân tử khí va chạm vào thành bình.',
              'Do chất khí có thể tích lớn.'
            ],
            correctIndex: 2,
            explanation: 'Áp suất gây ra do sự va chạm liên tục và hỗn loạn của các phân tử khí lên thành bình.'
          },
          {
            id: 'q5_2',
            question: 'Số Avogadro $N_A$ có giá trị xấp xỉ bằng:',
            options: [
              '$6.02 \\times 10^{-23}$',
              '$6.02 \\times 10^{23}$',
              '$1.38 \\times 10^{-23}$',
              '$8.31$'
            ],
            correctIndex: 1,
            explanation: '$N_A \\approx 6.022 \\times 10^{23} \\text{ mol}^{-1}$.'
          }
        ]
      },
      {
        id: 'l6',
        title: 'Bài 6: Định luật Boyle & Charles',
        summary: [
          '**1. Trạng thái và quá trình biến đổi:**\n Trạng thái của một lượng khí được xác định bởi 3 thông số: Áp suất ($p$), Thể tích ($V$), Nhiệt độ tuyệt đối ($T$).\n Đẳng quá trình là quá trình biến đổi trạng thái trong đó có một thông số không đổi.',
          '**2. Định luật Boyle (Quá trình đẳng nhiệt):**\n Ở nhiệt độ không đổi, áp suất của một khối lượng khí xác định tỉ lệ nghịch với thể tích của nó.\n $$p \\sim \\frac{1}{V} \\Rightarrow pV = \\text{hằng số}$$',
          '**3. Định luật Charles (Quá trình đẳng áp):**\n Ở áp suất không đổi, thể tích của một khối lượng khí xác định tỉ lệ thuận với nhiệt độ tuyệt đối của nó.\n $$V \\sim T \\Rightarrow \\frac{V}{T} = \\text{hằng số}$$'
        ],
        formulas: [
          { name: 'Định luật Boyle', expression: '$p_1 V_1 = p_2 V_2$', note: 'Áp dụng cho $T_1 = T_2$' },
          { name: 'Định luật Charles', expression: '$\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$', note: 'Áp dụng cho $p_1 = p_2$. $T$ phải là Kelvin' }
        ],
        exercises: [
          {
            id: 'ex6',
            question: 'Nén đẳng nhiệt một khối khí từ thể tích 10 lít đến 4 lít. Áp suất khí tăng hay giảm bao nhiêu lần?',
            solution: 'Theo định luật Boyle: $p_1 V_1 = p_2 V_2$\n$$\\Rightarrow \\frac{p_2}{p_1} = \\frac{V_1}{V_2} = \\frac{10}{4} = 2.5$$\n\nVậy áp suất tăng 2.5 lần.'
          }
        ],
        quizzes: [
          {
            id: 'q6_1',
            question: 'Đồ thị biểu diễn định luật Boyle trong hệ tọa độ (p, V) là đường gì?',
            options: [
              'Đường thẳng đi qua gốc tọa độ.',
              'Đường thẳng song song với trục hoành.',
              'Đường Hyperbol.',
              'Đường Parabol.'
            ],
            correctIndex: 2,
            explanation: 'Vì $p$ tỉ lệ nghịch với $V$ ($p = a/V$), nên đồ thị là một nhánh đường Hyperbol.'
          }
        ]
      },
      {
        id: 'l7',
        title: 'Bài 7: Phương trình trạng thái khí lí tưởng',
        summary: [
          '**1. Phương trình trạng thái (Phương trình Clapeyron):**\n Mối liên hệ giữa 3 thông số $p, V, T$ của một khối lượng khí xác định:\n $$\\frac{pV}{T} = \\text{hằng số}$$',
          '**2. Phương trình Clapeyron - Mendeleev:**\n Áp dụng cho $n$ mol khí:\n $$pV = nRT$$\n Trong đó:\n - $R \\approx 8.31 \\text{ J/(mol.K)}$ là hằng số khí lí tưởng.\n - $p$ (Pa), $V$ ($m^3$), $T$ (K).',
          '**3. Quá trình đẳng tích:**\n Quá trình biến đổi trạng thái khi thể tích không đổi. Từ phương trình trạng thái suy ra Định luật Gay-Lussac:\n $$\\frac{p}{T} = \\text{hằng số} \\Rightarrow \\frac{p_1}{T_1} = \\frac{p_2}{T_2}$$'
        ],
        formulas: [
          { name: 'PT trạng thái tổng quát', expression: '$\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}$', note: '' },
          { name: 'PT Clapeyron - Mendeleev', expression: '$pV = nRT = \\frac{m}{M}RT$', note: '$R=8.31$, đơn vị chuẩn SI' },
          { name: 'Định luật Gay-Lussac', expression: '$\\frac{p_1}{T_1} = \\frac{p_2}{T_2}$', note: '$V$ không đổi' }
        ],
        exercises: [
          {
            id: 'ex7',
            question: 'Một bình kín chứa khí ở $27^\\circ C$ và áp suất $2 \\text{ atm}$. Khi nung nóng đến $87^\\circ C$ thì áp suất là bao nhiêu? Bỏ qua sự dãn nở của bình.',
            solution: 'Đây là quá trình đẳng tích ($V$ không đổi).\nTrạng thái 1: $T_1 = 27 + 273 = 300 \\text{ K}$; $p_1 = 2 \\text{ atm}$.\nTrạng thái 2: $T_2 = 87 + 273 = 360 \\text{ K}$; $p_2 = ?$\n\nÁp dụng định luật Gay-Lussac:\n$$\\frac{p_1}{T_1} = \\frac{p_2}{T_2} \\Rightarrow p_2 = p_1 \\frac{T_2}{T_1} = 2 \\times \\frac{360}{300} = 2.4 \\text{ atm}$$'
          }
        ],
        quizzes: [
          {
            id: 'q7_1',
            question: 'Trong hệ SI, đơn vị của hằng số khí lý tưởng R là:',
            options: [
              'atm.lít/mol.K',
              'J/kg.K',
              'J/mol.K',
              'cal/mol.K'
            ],
            correctIndex: 2,
            explanation: '$R \\approx 8.31 \\text{ J/(mol.K)}$.'
          }
        ]
      },
      {
        id: 'l8',
        title: 'Bài 8: Áp suất - Động năng phân tử khí',
        summary: [
          '**1. Áp suất chất khí:**\n Áp suất của chất khí tác dụng lên thành bình phụ thuộc vào mật độ phân tử khí và nhiệt độ của khí (liên quan đến vận tốc chuyển động).',
          '**2. Biểu thức áp suất:**\n $$p = \\frac{1}{3} \\mu m \\overline{v^2}$$\n Trong đó:\n - $\\mu$: mật độ phân tử khí ($N/V$).\n - $m$: khối lượng một phân tử.\n - $\\overline{v^2}$: trung bình của bình phương vận tốc.',
          '**3. Động năng tịnh tiến trung bình:**\n Động năng tịnh tiến trung bình của phân tử khí tỉ lệ thuận với nhiệt độ tuyệt đối của khí:\n $$W_d = \\frac{3}{2} k T$$\n - $k = \\frac{R}{N_A} \\approx 1.38 \\times 10^{-23} \\text{ J/K}$ (hằng số Boltzmann).\n \n $\\Rightarrow$ Nhiệt độ là thước đo động năng chuyển động nhiệt trung bình của phân tử.'
        ],
        formulas: [
          { name: 'Động năng tịnh tiến TB', expression: '$W_d = \\frac{3}{2}kT$', note: '$k=1.38 \\times 10^{-23}$ J/K' },
          { name: 'Áp suất và động năng', expression: '$p = \\frac{2}{3} \\mu W_d$', note: '$\\mu = N/V$' }
        ],
        exercises: [
          {
            id: 'ex8',
            question: 'Tính động năng tịnh tiến trung bình của phân tử khí Helium ở nhiệt độ $27^\\circ C$.',
            solution: 'Nhiệt độ $T = 27 + 273 = 300 \\text{ K}$.\nHằng số Boltzmann $k = 1.38 \\times 10^{-23} \\text{ J/K}$.\n\n$$W_d = \\frac{3}{2}kT = 1.5 \\times 1.38 \\times 10^{-23} \\times 300 \\approx 6.21 \\times 10^{-21} \\text{ J}$$'
          }
        ],
        quizzes: [
          {
            id: 'q8_1',
            question: 'Khi nhiệt độ tuyệt đối của một khối khí lí tưởng tăng lên 4 lần thì động năng tịnh tiến trung bình của các phân tử khí sẽ:',
            options: [
              'Tăng 2 lần.',
              'Tăng 4 lần.',
              'Tăng 16 lần.',
              'Không đổi.'
            ],
            correctIndex: 1,
            explanation: '$W_d \\sim T$, nên $T$ tăng 4 lần thì $W_d$ tăng 4 lần.'
          }
        ]
      }
    ]
  }
];
