DROP TABLE IF EXISTS Quotes;

CREATE TABLE Quotes(id INT PRIMARY KEY, quote VARCHAR(500), author VARCHAR(40), difficulty VARCHAR(15));

INSERT INTO Quotes VALUES
  (1,'Infuse your life with action. Don''t wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.', 'Bradley Whitford', ''),
  (2,'You can''t cross the sea merely by standing and staring at the water', 'Rabindranath Tagore', ''),
  (3,'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.', 'Norman Vincent Peale', ''),
  (4,'I know where I''m going and I know the truth, and I don''t have to be what you want me to be. I''m free to be what I want.', 'Muhammad Ali', ''),
  (5,'Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Persistence and determination alone are omnipotent. The slogan ''Press On'' has solved and always will solve the problems of the human race.', 'Calvin Coolidge', ''),
  (6,'Live your life so that when your feet hit the floor in the morning, the Devil goes ''Oh shit, he''s up.''', 'Dwayne ''The Rock'' Johnson', ''),
  (7,'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven''t found it yet, keep looking. Don''t settle. As with all matters of the heart, you''ll know when you find it.', 'Steve Jobs', '')
;
