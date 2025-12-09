import { Section, SectionType } from './types';

export const FULL_TEXT_TITLE = "Salvador Dali";
export const FULL_TEXT_CONTENT = `Few with even a passing knowledge of the art world are likely not to have heard of Salvador Dali, the eccentric and avant-garde exponent of the Surrealist movement. Love him or loathe him, Dali's work has achieved enduring worldwide fame as his name and work have become virtually synonymous with Surrealism itself. The artist's melting clock image is surely one of the most iconic paintings of the art world, whilst Dali's antics have become the stuff of anecdotes.

Born into a middle-class family in the Catalonian town of Figueres in north-eastern Spain, Dali (or Salvador Felipe Jacinto Dali Domenech, to give him his full name) aimed high from the beginning. In the artist's 1942 autobiography entitled 'The Secret Life of Salvador Dali', the artist wrote: 'At the age of six I wanted to be a cook. At seven I wanted to be Napoleon. And my ambition has been growing steadily ever since.' Such ambition and self-belief matured into full-blown arrogance in later years. An example of this is amply shown on an occasion when the artist felt the examiners of the Madrid Academy he was attending were well below par.

To a degree, his undeniably impressive and precocious talent excused his conceit. He was only 14 when his first works were exhibited as part of a show in Figueres. Then three years later he was admitted to the Royal Academy of Fine Arts of San Fernando, in Madrid. However, it wasn't long before Dali's highly developed sense of self-worth (or conceit, depending on how you view the artist) came to the fore and also affected the course of his life. Believing himself way superior to the Academy tutors, who nevertheless refused to grant him a degree, the rebellious artist left for Paris. There he hoped to avail himself of knowledge that he believed his tutors were not adequate to impart. He soon made the acquaintance of the French surrealists Jean Arp, Rene Magritte and Max Ernst and this would prove a turning point in Dali's artistic life.

Already familiar with the psychoanalytic theories of Sigmund Freud, Dali was to witness how the French surrealists were attempting to capture Freud's ideas in paint. The whole world of the unconscious sublimated into dreams was to become the content of these artists' work and later that of Dali's, too. International acclaim followed shortly after. In 1933 he enjoyed solo exhibitions in Paris and New York City, becoming, as one exhibition curator put it, 'Surrealism's most exotic and prominent figure'. Praise continued to be heaped on Dali as French poet and critic, Andre Breton, the leader of the Surrealist movement gave the artist his blessing to continue carrying the torch for the artistic movement, writing that Dali's name was 'synonymous with revelation in the most resplendent sense of the word'.

Dali's surrealist paintings were packed with Freudian imagery: staircases, keys, dripping candles, in addition to a whole host of personally relevant symbolism such as grasshoppers and ants that captured his phobias on canvas. Despite Dali's overt adulation for Freud, a meeting with the grandmaster of psychoanalysis proved somewhat unfortunate. On the occasion that Dali met Freud, he proceeded to sketch the latter in earnest. However, something about Dali's fervid attitude must have alarmed the psychoanalyst as he is said to have whispered to others in the room, 'The boy looks like a fanatic.'

Sometimes Dali came across as not only mad but also unintelligible, at least as far as his paintings were concerned. One work, 'The Persistence of Memory', was particularly singled out for the sheer confusion it caused amongst its viewers. Featuring melting clocks, swarming ants and a mollusc that was the deflated head of Dali in disguise, the images were so puzzling that one critic urged readers to 'page Dr. Freud' to uncover the meaning of the canvas. His work was, if nothing else, provocative and powerful.

With the passing years, Dali became ever more infatuated with money, admitting to a 'pure, vertical, mystical, gothic love of cash'. Accordingly, he indiscriminately endorsed a host of products for French and American TV commercials. Fie also never failed to promote himself and displayed increasingly exhibitionist behaviour as time went on. Most notably, he once turned up for a lecture in Paris in a Rolls Royce stuffed with cauliflowers. Fie obviously believed the slogan of one of his advertising campaigns for Braniff Airlines, where he declares 'If you got it, flaunt it.' As a more positive outcome of his love for money, Dali took on increasingly diverse projects, ranging from set design to designing clothes and jewellery. His critics, however, believed that early on in his career his love for money exceeded his dedication to producing great art, resulting in Dali producing 'awful junk' after 1939, according to one art critic.

Despite a lukewarm reception from critics, Dali's public popularity never declined. In 1974, at 70 years old, the Dali Theatre Museum opened in his hometown, Figueres. More of a surrealist happening than a museum, one exhibit was a long black Cadillac that rained inside itself whenever a visitor dropped a coin into the slot. Even today hundreds of thousands of visitors still tour the museum each year. Whatever your opinion of him, at least Dali is unlikely to ever be forgotten.`;

export const EXAM_DATA: Section[] = [
  {
    id: 'part-1',
    title: 'PHẦN 1: QUESTIONS 11-13',
    type: SectionType.MATCHING,
    description: 'Matching Sentence Endings: Tìm phần đuôi câu khớp về ngữ pháp và ý nghĩa.',
    questions: [
      {
        id: '11',
        questionText: 'Dali displayed a precocious talent from an early age; however, he was aware...',
        answer: 'C (...his artistic studies needed to be supplemented by going to Paris...)',
        contextSnippet: "However, it wasn't long before Dali's highly developed sense of self-worth... {{Believing}} himself way superior to the Academy tutors... the rebellious artist {{left for Paris}}. There he {{hoped to avail himself of knowledge that he believed his tutors were not adequate to impart}}.",
        analysisPoints: [
          {
            questionKeyword: 'aware (nhận thức được)',
            textKeyword: 'Believing (tin rằng)',
            explanation: 'Dali tin rằng thầy giáo không đủ giỏi.'
          },
          {
            questionKeyword: 'studies needed to be supplemented',
            textKeyword: 'hoped to avail himself of knowledge that he believed his tutors were not adequate to impart',
            explanation: '"Supplemented" (bổ sung) đồng nghĩa với việc đi tìm kiến thức mà thầy cô hiện tại không dạy được.'
          },
          {
            questionKeyword: 'going to Paris',
            textKeyword: 'left for Paris',
            explanation: 'Khớp hoàn toàn về địa điểm.'
          }
        ]
      },
      {
        id: '12',
        questionText: 'Encountering the French Surrealist painters in Paris...',
        answer: 'E (...inspired Dali to focus on the psychoanalytic content of his artwork.)',
        contextSnippet: "He soon {{made the acquaintance of}} the {{French surrealists Jean Arp, Rene Magritte}} and Max Ernst... Dali was to witness how the French surrealists were attempting to {{capture Freud's ideas in paint... The whole world of the unconscious sublimated into dreams}}...",
        analysisPoints: [
          {
            questionKeyword: 'Encountering (Gặp gỡ)',
            textKeyword: 'made the acquaintance of (làm quen với)',
            explanation: 'Đồng nghĩa.'
          },
          {
            questionKeyword: 'French Surrealist painters',
            textKeyword: 'French surrealists Jean Arp, Rene Magritte...',
            explanation: 'Liệt kê tên cụ thể.'
          },
          {
            questionKeyword: 'inspired Dali to focus on the psychoanalytic content',
            textKeyword: "capture Freud's ideas in paint... The whole world of the unconscious sublimated into dreams",
            explanation: '"Capture Freud\'s ideas" = "Psychoanalytic content".'
          }
        ]
      },
      {
        id: '13',
        questionText: 'Dali’s artistic legacy is secure although...',
        answer: 'D (...some art critics are less impressed with his work than the general public.)',
        contextSnippet: "{{Despite}} a {{lukewarm reception from critics... public popularity never declined}}... at least Dali is {{unlikely to ever be forgotten}}.",
        analysisPoints: [
          {
            questionKeyword: 'legacy is secure',
            textKeyword: 'unlikely to ever be forgotten',
            explanation: 'Không bị lãng quên = Di sản bền vững.'
          },
          {
            questionKeyword: 'although',
            textKeyword: 'Despite',
            explanation: 'Từ nối chỉ sự tương phản.'
          },
          {
            questionKeyword: 'critics are less impressed... than general public',
            textKeyword: 'lukewarm reception from critics... public popularity never declined',
            explanation: 'Sự tiếp nhận lạnh nhạt từ nhà phê bình vs sự phổ biến với công chúng.'
          }
        ]
      }
    ]
  },
  {
    id: 'part-2',
    title: 'PHẦN 2: QUESTIONS 14-16',
    type: SectionType.MULTIPLE_CHOICE,
    description: 'Multiple Choice: Chọn đáp án đúng nhất dựa trên thông tin bài đọc.',
    questions: [
      {
        id: '14',
        questionText: "Dali's departure for Paris was...",
        answer: 'D (a quest for self-improvement.)',
        note: 'Lưu ý bẫy (A): already familiar with psychoanalytic theories. Ông ấy đã biết trước, nên mục đích đi Paris là học kiến thức chung.',
        contextSnippet: "...the rebellious artist {{left for Paris}}. There he {{hoped to}} {{avail himself of knowledge}} that he believed his tutors were not adequate to impart.",
        analysisPoints: [
          {
            questionKeyword: 'departure for Paris',
            textKeyword: 'left for Paris',
            explanation: 'Rời đi.'
          },
          {
            questionKeyword: 'a quest for',
            textKeyword: 'hoped to',
            explanation: 'Chỉ mục đích.'
          },
          {
            questionKeyword: 'self-improvement',
            textKeyword: 'avail himself of knowledge',
            explanation: 'Đi học hỏi thêm kiến thức chính là đi hoàn thiện bản thân.'
          }
        ]
      },
      {
        id: '15',
        questionText: 'Dali came to represent the Surrealist movement...',
        answer: 'B (because he depicted the most memorable images of Surrealism.)',
        contextSnippet: "Love him or loathe him, Dali's work has achieved enduring worldwide fame as his name and work have become virtually {{synonymous with}} Surrealism itself. The artist's melting clock image is surely {{one of the most iconic paintings}} of the art world...",
        analysisPoints: [
          {
            questionKeyword: 'represent (đại diện)',
            textKeyword: 'synonymous with',
            explanation: 'Tên ông ấy đồng nghĩa với phong trào.'
          },
          {
            questionKeyword: 'most memorable images',
            textKeyword: 'one of the most iconic paintings',
            explanation: '"Iconic" = "Most memorable".'
          }
        ]
      },
      {
        id: '16',
        questionText: "Dali's work was...",
        answer: 'B (loaded with secret symbolism.)',
        contextSnippet: "Dali's surrealist paintings were {{packed with}} Freudian imagery... in addition to a whole host of {{personally relevant symbolism... puzzling}}...",
        analysisPoints: [
          {
            questionKeyword: 'loaded with',
            textKeyword: 'packed with',
            explanation: 'Đồng nghĩa hoàn toàn.'
          },
          {
            questionKeyword: 'secret symbolism',
            textKeyword: 'personally relevant symbolism... puzzling',
            explanation: 'Các biểu tượng mang tính riêng tư/bí ẩn ("secret").'
          }
        ]
      }
    ]
  },
  {
    id: 'part-3',
    title: 'PHẦN 3: QUESTIONS 19-21',
    type: SectionType.MULTIPLE_CHOICE,
    description: 'Phân tích quan điểm và thái độ của tác giả.',
    questions: [
      {
        id: '19',
        questionText: "What does the writer convey about Dali's childhood...?",
        answer: 'C (his supreme confidence in his own abilities)',
        contextSnippet: "At the {{age of six... seven... attending Madrid Academy}}... Such {{ambition... self-belief... full-blown arrogance}}... {{believing himself way superior}}...",
        analysisPoints: [
          {
            questionKeyword: 'childhood/student days',
            textKeyword: 'age of six... seven... attending Madrid Academy',
            explanation: 'Xác định thời gian.'
          },
          {
            questionKeyword: 'supreme confidence',
            textKeyword: 'ambition... self-belief... full-blown arrogance',
            explanation: 'Chuỗi từ chỉ sự tự tin thái quá.'
          }
        ]
      },
      {
        id: '20',
        questionText: 'Why did critics turn against Dali?',
        answer: 'C (His work no longer did justice to his talent.)',
        contextSnippet: "{{His critics, however, believed that}} early on in his career his {{love for money exceeded his dedication... producing 'awful junk'}} after 1939...",
        analysisPoints: [
          {
            questionKeyword: 'critics turn against',
            textKeyword: 'His critics, however, believed that...',
            explanation: 'Quan điểm tiêu cực của nhà phê bình.'
          },
          {
            questionKeyword: 'no longer did justice',
            textKeyword: "love for money exceeded his dedication... producing 'awful junk'",
            explanation: 'Ham tiền hơn nghệ thuật -> tác phẩm kém chất lượng.'
          }
        ]
      },
      {
        id: '21',
        questionText: "Writer's attitude towards Dali's life and work?",
        answer: 'D (He believes that despite his failings, Dali has left an enduring legacy.)',
        contextSnippet: "{{Whatever your opinion of him}}... at least Dali is {{unlikely to ever be forgotten}}.",
        analysisPoints: [
          {
            questionKeyword: 'attitude / despite failings',
            textKeyword: 'Whatever your opinion of him',
            explanation: 'Tác giả thừa nhận Dali có nhiều tranh cãi.'
          },
          {
            questionKeyword: 'enduring legacy',
            textKeyword: 'unlikely to ever be forgotten',
            explanation: 'Không bao giờ bị quên lãng = Di sản vĩnh cửu.'
          }
        ]
      }
    ]
  },
  {
    id: 'part-4',
    title: 'PHẦN 4: QUESTIONS 22-26',
    type: SectionType.SUMMARY,
    description: 'Summary Completion: Tìm từ trong bài để điền vào chỗ trống.',
    questions: [
      {
        id: '22',
        questionText: 'Q22: worldwide fame',
        answer: 'managed to achieve...',
        contextSnippet: "...Dali's work has {{achieved enduring worldwide fame}}...",
        analysisPoints: [
          {
            questionKeyword: 'worldwide fame',
            textKeyword: "achieved enduring worldwide fame",
            explanation: 'Paraphrase: "managed to achieve..." = "achieved...".'
          }
        ]
      },
      {
        id: '23',
        questionText: 'Q23: ambition / self-belief',
        answer: 'sheer...',
        contextSnippet: "Such {{ambition and self-belief matured into full-blown arrogance}}...",
        analysisPoints: [
          {
            questionKeyword: 'ambition / self-belief',
            textKeyword: 'ambition and self-belief matured into full-blown arrogance',
            explanation: 'Paraphrase: "His sheer [ambition]... interpreted as arrogance".'
          }
        ]
      },
      {
        id: '24',
        questionText: 'Q24: turning point',
        answer: 'prove a...',
        contextSnippet: "...this would {{prove a turning point}} in Dali's artistic life.",
        analysisPoints: [
          {
            questionKeyword: 'turning point',
            textKeyword: 'prove a turning point',
            explanation: 'Paraphrase: "Moving to France... was a [turning point] in his life."'
          }
        ]
      },
      {
        id: '25',
        questionText: 'Q25: psychoanalytic',
        answer: 'theories of...',
        contextSnippet: "Already familiar with the {{psychoanalytic theories of Sigmund Freud}}...",
        analysisPoints: [
          {
            questionKeyword: 'psychoanalytic',
            textKeyword: 'psychoanalytic theories of Sigmund Freud',
            explanation: 'Paraphrase: "inspired by Freud\'s [psychoanalytic] theories."'
          }
        ]
      },
      {
        id: '26',
        questionText: 'Q26: be forgotten',
        answer: 'unlikely to ever...',
        contextSnippet: "...at least Dali is {{unlikely to ever be forgotten}}.",
        analysisPoints: [
          {
            questionKeyword: 'be forgotten',
            textKeyword: 'unlikely to ever be forgotten',
            explanation: 'Paraphrase: "Dali will never [be forgotten]." (Never = Unlikely to ever).'
          }
        ]
      }
    ]
  },
  {
    id: 'strategy',
    title: 'TỔNG KẾT CHIẾN THUẬT',
    type: SectionType.STRATEGY,
    description: 'Những bài học rút ra từ bài đọc này.',
    questions: [],
    strategyPoints: [
      {
        title: 'Paraphrase cảm xúc/tính chất',
        content: 'Các từ chỉ tính chất như Arrogance, Ambition, Self-belief thường được paraphrase thành Supreme confidence (Câu 19).'
      },
      {
        title: 'Paraphrase phủ định/trái nghĩa',
        content: 'Unlikely to be forgotten (không thể bị quên) = Legacy is secure (di sản được đảm bảo) (Câu 13, 21).'
      },
      {
        title: 'Paraphrase cụm từ trừu tượng',
        content: 'Self-improvement (hoàn thiện bản thân) được dùng để tóm gọn cho hành động Avail himself of knowledge (đi tìm kiến thức) (Câu 14).'
      }
    ]
  }
];
