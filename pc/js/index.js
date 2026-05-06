var isHobbyLoad = false;
var isTyping = false;

window.onload = function() {
	if (getIsMobile()) {
		window.location.href = "../phone/phone.html";
		return;
	}
	
	const backHeight = window.innerHeight * 0.5;
	
	const tableSpace = document.getElementById("table-space");
	const tableHeight = tableSpace.offsetHeight;
	
	const top1 = document.getElementById("top1");
	
	const top2 = document.getElementById("top2");
	//top2.style.marginTop = backHeight + "px";
	
	const back = document.getElementById("back");
	back.style.height = back.offsetWidth + "px";
	back.style.marginTop = back.offsetHeight * 0.2 * -1 + "px";
	
	const experiencedSpace = document.getElementById("experienced-space");
	const experiencedHeight = experiencedSpace.offsetHeight;
	
	const line = document.getElementById("line");
	line.style.height = experiencedHeight - 40 + "px";
	
	start();
}

function start() {
	viewState(document.getElementById("view1"), document.getElementById("developer-space"), 0);
	viewState(document.getElementById("view2"), document.getElementById("language1"), 1);
	viewState(document.getElementById("view3"), document.getElementById("language2"), 2);
	viewState(document.getElementById("view8"), document.getElementById("experienced-space"), 7);
}

function viewState(layout, setLayout, module) {
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
			setLayout.style.visibility = "visible";
			setLayout.classList.add("fade-in");
			if (module == 0 && !isHobbyLoad) {
				isHobbyLoad = true;
				setProgress(10, document.getElementById("proagress1"), document.getElementById("proagress-text1"));
				setProgress(68, document.getElementById("proagress2"), document.getElementById("proagress-text2"));
				setProgress(60, document.getElementById("proagress3"), document.getElementById("proagress-text3"));
				setProgress(34, document.getElementById("proagress4"), document.getElementById("proagress-text4"));
				var leveloper = document.getElementById("developer-data");
				leveloper.classList.add("slideInOut-amin");
			}
			if (module == 7 && !isTyping) {
				isTyping = true;
				text("鍦ㄥ涔犵紪绋嬪墠锛屾垜鏇剧儹琛蜂簬鍓緫銆佺粯鐢汇€佸啓浣溿€�2019骞村湪鍚屽鐨勫紩鑽愪笅锛岀涓€娆℃帴瑙︿簡C璇█锛屼粠姝ゅ懡杩愮殑榻胯疆寮€濮嬭浆鍔�", document.getElementById("e1"));
				text("2020骞寸涓€娆℃帴瑙︽墜鏈虹紪绋媔App銆乴ua锛屼粠姝ゅ杞欢寮€鍙戞劅鍏磋叮", document.getElementById("e2"));
				text("2021骞村涔犱簡Java銆丳HP璇█锛屽苟涓斿紑濮嬪紑鍙戝悗绔紝浜庡洓鏈堜唤寮€鍙戠涓€涓嫭绔嬮」鐩€滆壓鍗椻€濄€備粠姝よ繘鍏ヨ蒋浠跺紑鍙戣涓�", document.getElementById("e3"));
				text("2022骞村涔犱簡html銆乧ss銆乯s璇█锛屽紑濮嬬潃鍔涗簬缃戦〉寮€鍙戯紝鍚戝叏鏍堝伐绋嬪笀鏂瑰悜杩堣繘銆傚悓骞村勾搴曞紑鍙戔€滄按浠橬arcissus鈥濋」鐩�", document.getElementById("e4"));
				text("2023骞村涔犱簡C++璇█锛屼綔鐢ㄤ簬UE4娓告垙椤圭洰寮€鍙戯紝灞曞紑浜嗗娓告垙棰嗗煙鐨勫彂灞曘€傚悓骞村皢鈥滄按浠欌€濆鎴风椤圭洰杩佺Щ鑷冲師鐢烝ndroid studio", document.getElementById("e5"));
				text("2024骞寸潃鍔涗簬Netty銆丼woole绛夊嵆鏃堕€氳鎶€鏈爺绌讹紝寮€灞曚簡娴佸紡浼犺緭銆侀€氳瘽鍔熻兘銆佽仈缃戞父鎴忎氦浜掔瓑鎶€鏈ā鍧�", document.getElementById("e6"))
				text("2025骞村涔燢otlin璇█锛孧VVM銆丏DD鍒嗗眰鏋舵瀯锛屾湭鏉ュ皢鎵€鏈夐」鐩互鏈€鏂版灦鏋勫紑鍙�", document.getElementById("e7"))
			}
		}
	  });
	});
	observer.observe(layout);
}

function setProgress(target, progressCircle, progressText) {
    const total = 440;
    let progress = 0;
    const step = 0.5;
    function animateProgress() {
        if (progress < target) {
            progress += step;
            const dashOffset = total - (total * progress) / 100;
			let intNumber = Math.floor(progress);
            progressCircle.style.strokeDashoffset = dashOffset;
			progressText.innerHTML = `${intNumber}<span>%</span>`
            requestAnimationFrame(animateProgress);
        }
    }
    // 鍚姩鍔ㄧ敾
    animateProgress();
}

function text(text, view) {
	view.textContent = "";
	const typingSpeed = 50;
	let index = 0;
	function type() {
		if (index < text.length) {
			view.textContent += text.charAt(index);
			index++;
			setTimeout(type, typingSpeed);
		}
	}
	type();
}

document.addEventListener('DOMContentLoaded', function() {
    const load = document.getElementById("loadSpace");
	load.style.visibility = "hidden";
	document.body.style.overflow = "visible";
});

function project1() {
	alert("鏁鏈熷緟");
}

function project2() {
	document.location.href = "index.html";
}

function project3() {
	document.location.href = "https://www.123pan.com/s/F2SfTd-Kd8xd.html";
}

function project4() {
	document.location.href = "http://www.jiedanhome.cn";
}

function p1() {
	setProgress(40, document.getElementById("proagress1"), document.getElementById("proagress-text1"));
}

function p2() {
	setProgress(82, document.getElementById("proagress2"), document.getElementById("proagress-text2"));
}

function p3() {
	setProgress(70, document.getElementById("proagress3"), document.getElementById("proagress-text3"));
}

function p4() {
	setProgress(54, document.getElementById("proagress4"), document.getElementById("proagress-text4"));
}

function getIsMobile() {
	const width = window.innerWidth;
	const height = window.innerHeight;
	if (width >= height) {
		return false;
	} else {
		return true;
	}
}