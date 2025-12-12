import React, { useState, ChangeEvent, FormEvent } from "react";

type FormState = {
  companyName: string;
  sector: string;
  companySize: string;
  topProcesses: string;
  pains: string;
  tools: string;
  kpiGoals: string;
  budgetRange: string;
  timeline: string;
  newsletterConsent: boolean;
};

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzK0T_sfw2tZ4ISAOk5LRvch2xayeK4iT7KwTboAs4a1LeLbLOTKzAPwsfC50cD99Ng/exec"; 
// ^^^ ČIA ĮKLIJUOK SAVO Web App URL iš Google Apps Script

const InquiryForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    companyName: "",
    sector: "",
    companySize: "",
    topProcesses: "",
    pains: "",
    tools: "",
    kpiGoals: "",
    budgetRange: "",
    timeline: "",
    newsletterConsent: false,
  });

  const [status, setStatus] = useState<"loading" | "success" | "error" | null>(
    null
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(form),
      });

      setStatus("success");
      setForm({
        companyName: "",
        sector: "",
        companySize: "",
        topProcesses: "",
        pains: "",
        tools: "",
        kpiGoals: "",
        budgetRange: "",
        timeline: "",
        newsletterConsent: false,
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="companyName"
        placeholder="Įmonės pavadinimas"
        value={form.companyName}
        onChange={handleChange}
        required
      />

      <input
        name="sector"
        placeholder="Sektorius"
        value={form.sector}
        onChange={handleChange}
        required
      />

      <input
        name="companySize"
        placeholder="Įmonės dydis (pvz. 1–5 žmonės, 10–50 ir pan.)"
        value={form.companySize}
        onChange={handleChange}
        required
      />

      <textarea
        name="topProcesses"
        placeholder="Top-3 procesai, kuriuos norėtumėte optimizuoti"
        value={form.topProcesses}
        onChange={handleChange}
        required
      />

      <textarea
        name="pains"
        placeholder="Pagrindiniai skausmai / iššūkiai"
        value={form.pains}
        onChange={handleChange}
        required
      />

      <textarea
        name="tools"
        placeholder="Dabartiniai įrankiai"
        value={form.tools}
        onChange={handleChange}
      />

      <textarea
        name="kpiGoals"
        placeholder="KPI tikslai"
        value={form.kpiGoals}
        onChange={handleChange}
      />

      <input
        name="budgetRange"
        placeholder="Biudžeto intervalas"
        value={form.budgetRange}
        onChange={handleChange}
      />

      <input
        name="timeline"
        placeholder="Norimas terminas"
        value={form.timeline}
        onChange={handleChange}
      />

      <label
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          marginTop: "0.5rem",
        }}
      >
        <input
          type="checkbox"
          name="newsletterConsent"
          checked={form.newsletterConsent}
          onChange={handleChange}
        />
        Noriu gauti naujienas apie DI sprendimus verslui
      </label>

      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Siunčiama..." : "Siųsti užklausą"}
      </button>

      {status === "success" && (
        <p style={{ marginTop: "0.5rem" }}>
          Ačiū! Gavau tavo užklausą – netrukus susisieksiu.
        </p>
      )}
      {status === "error" && (
        <p style={{ marginTop: "0.5rem", color: "red" }}>
          Kažkas nepavyko. Pabandyk dar kartą arba parašyk tiesiogiai el. paštu.
        </p>
      )}
    </form>
  );
};

export default InquiryForm;
