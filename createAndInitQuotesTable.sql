DROP TABLE IF EXISTS Quotes;

CREATE TABLE Quotes(id INT PRIMARY KEY, quote VARCHAR(1000), author VARCHAR(40), difficulty VARCHAR(15));

INSERT INTO Quotes VALUES
  (1,'Infuse your life with action. Don''t wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.', 'Bradley Whitford', ''),
  (2,'You can''t cross the sea merely by standing and staring at the water', 'Rabindranath Tagore', ''),
  (3,'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.', 'Norman Vincent Peale', ''),
  (4,'I know where I''m going and I know the truth, and I don''t have to be what you want me to be. I''m free to be what I want.', 'Muhammad Ali', ''),
  (5,'Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Persistence and determination alone are omnipotent. The slogan ''Press On'' has solved and always will solve the problems of the human race.', 'Calvin Coolidge', ''),
  (6,'Live your life so that when your feet hit the floor in the morning, the Devil goes ''Oh shit, he''s up.''', 'Dwayne ''The Rock'' Johnson', ''),
  (7,'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven''t found it yet, keep looking. Don''t settle. As with all matters of the heart, you''ll know when you find it.', 'Steve Jobs', ''),
  (8, 'A day without sunshine is like, you know, night.', 'Steve Martin', ''),
  (9, 'Two things are infinite: the universe and human stupidity; and I''m not sure about the universe.', 'Albert Einstein', ''),
  (10, 'The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.','Confuscius', ''),
  (11, 'A creative man is motivated by the desire to achieve, not by the desire to beat others.', 'Ayn Rand', ''),
  (12, 'Start by doing what''s necessary; then do what''s possible; and suddenly you are doing the impossible.', 'Francis of Assisi', ''),
  (13, 'Hapiness is not something ready made. It comes from your own actions.', 'Dalai Lama', ''),
  (14, 'The further the spiritual evolution of mankind advances, the more certain it seems to me that the path to genuine religiosity does not lie through the fear of life, and the fear of death, and blind faith, but through striving after rational knowledge', 'Albert Einstein', ''),
  (15, 'We don''t develop courage by being happy every day. We develop it by surviving difficult times and challenging adversity.', 'Barbara de Angelis', ''),
  (16, 'The budget to send the Curiosity Rover to Mars is less than the worldwide military expenditure for 13 hours.', 'Cracked.com - Crazy facts', ''),
  (17, 'In the United States at any given moment, there are 2,000,000 impaired drivers on the road', 'www.examiner.com', ''),
  (18, 'You have a 1 in 2,067,000 chance of dying in a plane crash... And a 1 in 423,548 chance of dying from falling out of bed.', 'Cracked.com - Crazy facts', ''),
  (19, 'Every minute, a 70 kilogram human emits 14,600 gamma rays because of radioactive postassium', 'Cracked.com - Crazy facts', ''),
  (20, 'By the age of 4, the average child in a professional family has head 20,000,000 more words than a child in a middle-class family... And about 35,000,000 more than a child raised in a family that receives welfare assistance.', 'Cracked.com - Crazy facts', ''),
  (21, '43% of pilots admit to falling asleep during flight. 33% of them report waking up to find that their co-pilots had fallen asleep as well.', 'Cracked.com - Crazy facts', ''),
  (22, '"Hey, what''s your cell number?" "(Violet Brown Gray)- uh, I mean, (718)-387-6962." "Ok, you are putting down those resistors and going outside for awhile." "Thats probably a good idea.', 'xkcd.com/227', '')
;

