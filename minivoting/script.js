// ========================================
// DATA KANDIDAT
// ========================================

const candidates = [
    {
        id: 1,
        name: "Ahmad",
        emoji: "🧑‍💻",
        votes: 0
    },

    {
        id: 2,
        name: "Budi",
        emoji: "👨‍🎨",
        votes: 0
    },

    {
        id: 3,
        name: "Citra",
        emoji: "👩‍🚀",
        votes: 0
    }
];


// ========================================
// AMBIL ELEMENT HTML
// ========================================

const candidateList =
    document.querySelector("#candidateList");

const voteButton =
    document.querySelector("#voteButton");

const message =
    document.querySelector("#message");

const result =
    document.querySelector("#result");

const totalVotesElement =
    document.querySelector("#totalVotes");


// Kandidat yang dipilih
let selectedCandidate = null;


// ========================================
// MENAMPILKAN KANDIDAT
// ========================================

function renderCandidates() {

    candidateList.innerHTML = "";

    for (let i = 0; i < candidates.length; i++) {

        const candidate = candidates[i];

        const card = document.createElement("label");

        card.className = `
            flex
            items-center
            gap-4
            p-4
            rounded-2xl
            bg-white/5
            border
            border-white/10
            cursor-pointer
            transition
            hover:bg-white/10
            hover:border-cyan-400/30
        `;


        card.innerHTML = `

            <input
                type="radio"
                name="candidate"
                value="${candidate.id}"
                class="peer hidden"
            >

            <div
                class="w-5 h-5
                       rounded-full
                       border-2
                       border-slate-600
                       flex items-center
                       justify-center
                       peer-checked:border-cyan-400">

                <div
                    class="w-2.5 h-2.5
                           rounded-full
                           bg-cyan-400
                           hidden
                           peer-checked:block">
                </div>

            </div>


            <div
                class="w-11 h-11
                       rounded-xl
                       bg-white/10
                       flex items-center
                       justify-center
                       text-xl">

                ${candidate.emoji}

            </div>


            <div class="flex-1">

                <p class="font-semibold">
                    ${candidate.name}
                </p>

                <p class="text-xs text-slate-500 mt-1">
                    Candidate #${candidate.id}
                </p>

            </div>

        `;


        const radio =
            card.querySelector("input");


        radio.addEventListener("change", function () {

            selectedCandidate =
                candidate.id;

        });


        candidateList.appendChild(card);

    }

}


// ========================================
// TOTAL VOTE
// ========================================

function getTotalVotes() {

    let total = 0;

    for (let i = 0; i < candidates.length; i++) {

        total += candidates[i].votes;

    }

    return total;
}


// ========================================
// HASIL VOTING
// ========================================

function renderResults() {

    result.innerHTML = "";

    const totalVotes =
        getTotalVotes();


    totalVotesElement.textContent =
        totalVotes;


    for (let i = 0; i < candidates.length; i++) {

        const candidate =
            candidates[i];


        let percentage = 0;


        if (totalVotes > 0) {

            percentage =
                (candidate.votes / totalVotes) * 100;

        }


        result.innerHTML += `

            <div>

                <div class="flex
                            items-center
                            justify-between
                            mb-2">

                    <div class="flex
                                items-center
                                gap-3">

                        <span class="text-xl">
                            ${candidate.emoji}
                        </span>

                        <span class="font-medium">
                            ${candidate.name}
                        </span>

                    </div>


                    <div>

                        <span class="font-bold">
                            ${candidate.votes}
                        </span>

                        <span class="text-sm
                                     text-slate-500">

                            (${percentage.toFixed(1)}%)

                        </span>

                    </div>

                </div>


                <!-- Progress Bar -->

                <div class="w-full
                            h-2
                            bg-white/10
                            rounded-full
                            overflow-hidden">

                    <div
                        class="h-full
                               rounded-full
                               bg-gradient-to-r
                               from-cyan-400
                               to-blue-500
                               transition-all
                               duration-500"
                        style="width: ${percentage}%">

                    </div>

                </div>

            </div>

        `;

    }


    showWinner();

}


// ========================================
// PEMENANG
// ========================================

function showWinner() {

    const totalVotes =
        getTotalVotes();


    if (totalVotes === 0) {
        return;
    }


    let winner =
        candidates[0];


    for (let i = 1; i < candidates.length; i++) {

        if (
            candidates[i].votes >
            winner.votes
        ) {

            winner =
                candidates[i];

        }

    }


    result.innerHTML += `

        <div class="mt-5
                    p-4
                    rounded-2xl
                    bg-yellow-400/5
                    border
                    border-yellow-400/20
                    text-center">

            <p class="text-xs
                      text-yellow-400
                      font-bold
                      uppercase
                      tracking-widest">

                🏆 Current Leader

            </p>

            <p class="text-xl
                      font-bold
                      mt-1">

                ${winner.emoji}
                ${winner.name}

            </p>

        </div>

    `;

}


// ========================================
// BUTTON VOTE
// ========================================

voteButton.addEventListener(
    "click",
    function () {

        // Cek kandidat
        if (selectedCandidate === null) {

            message.textContent =
                "⚠️ Pilih kandidat terlebih dahulu!";

            message.className =
                "text-center text-sm mt-4 text-red-400";

            return;

        }


        // Cari kandidat
        for (let i = 0; i < candidates.length; i++) {

            if (
                candidates[i].id ===
                selectedCandidate
            ) {

                candidates[i].votes++;

                message.textContent =
                    `✓ Vote untuk ${candidates[i].name} berhasil!`;

                message.className =
                    "text-center text-sm mt-4 text-green-400";

            }

        }


        // Update hasil
        renderResults();


        // Reset pilihan
        selectedCandidate = null;


        const radios =
            document.querySelectorAll(
                'input[name="candidate"]'
            );


        for (let i = 0; i < radios.length; i++) {

            radios[i].checked = false;

        }

    }
);


// ========================================
// JALANKAN PROGRAM
// ========================================

renderCandidates();

renderResults();