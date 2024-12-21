document.getElementById("postButton").addEventListener("click", function() {
    const tweetText = document.getElementById("tweetInput").value;
  
    if (tweetText.trim() !== "") {
      // 新しい投稿を作成
      const tweetElement = document.createElement("div");
      tweetElement.classList.add("tweet");
  
      const tweetContent = document.createElement("p");
      tweetContent.textContent = tweetText;
  
      tweetElement.appendChild(tweetContent);
      document.getElementById("tweetFeed").prepend(tweetElement);
  
      // 投稿後、入力フィールドをクリア
      document.getElementById("tweetInput").value = "";
    }
  });
  