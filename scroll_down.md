
## 鍵盤控制

可以使用以下鍵盤控制:

- p 鍵: 暫停/繼續滾動
- [ 鍵: 向上滾動
- ] 鍵: 向下滾動

當滾動到頂部或底部時,動畫會自動停止。你可以根據需要調整 scrollSpeed 和 height 的值來控制滾動速度和距離。

## 說明

requestAnimationFrame 是瀏覽器提供的一個函數,用於實現流暢的動畫效果。它的主要作用是確保動畫只在瀏覽器重新繪製時執行,而不是在每個可能的時間點執行,這樣可以大大提高動畫的流暢度和性能。
requestAnimationFrame 的工作原理如下:

瀏覽器重新繪製的時間:瀏覽器每秒會重新繪製頁面60次(大多數設備是這樣,某些設備可能更高或更低)。這意味著每16.67毫秒,瀏覽器就會重新繪製一次頁面。
調用 requestAnimationFrame:當你調用 requestAnimationFrame(callback) 時,瀏覽器會將你傳入的 callback 函數加入到下一次重新繪製時的工作隊列中。換句話說,在下一次瀏覽器重新繪製時,你的 callback 函數就會被調用執行。
回調函數的執行:當你的 callback 函數被執行時,你可以在其中進行動畫相關的操作,例如改變元素的位置、透明度等。完成動畫操作後,如果你想要繼續下一個動畫狀態,只需再次調用 requestAnimationFrame(callback) 即可。
取消動畫:如果你不再需要動畫效果,可以調用 cancelAnimationFrame(requestID) 來取消下一次的動畫回調,requestID 是 requestAnimationFrame 返回的一個標識符。

使用 requestAnimationFrame 的好處:

節省CPU和GPU資源:與 setTimeout 或 setInterval 不同,requestAnimationFrame 只會在瀏覽器重新繪製時觸發回調,不會導致過多不必要的系統負載。
流暢的視覺效果:由於動畫與瀏覽器的重新繪製同步,所以動畫會非常流暢,不會出現卡頓的情況。
有效管理CPU節能模式:當瀏覽器頁籤處於非活動狀態時,requestAnimationFrame 會自動暫停,從而節省電池壽命。

因此,如果你需要實現流暢的動畫效果,建議使用 requestAnimationFrame。 它已廣泛應用於實現平滑滾動、動畫和遊戲等效果。
