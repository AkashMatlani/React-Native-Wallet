//react custom hooks  file

import { useState, useCallback } from "react";

const API_URL = "https://localhost:5001/api";

export const useTrancation = (userId) => {
  const [transaction, setTransaction] = useState();
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });

  const [isLoading, setIsLoading] = useState(true);

  //useCallback is used for peformance reason, it will memozie the function
  const fetchTranscations = useCallback(async () => {
    try {
      const resposne = await fetch(`${API_URL}/transactions/${userId}`);
      const data = await resposne.json();
      setTransaction(data);
    } catch (error) {
      console.error("Error fetching transaction", error);
    }
  }, [userId]);

  const fetchSummary = useCallback(async () => {
    try {
      const resposne = await fetch(`${API_URL}/transactions/${userId}`);
      const data = await resposne.json();
      setTransaction(data);
    } catch (error) {
      console.error("Error fetching transaction", error);
    }
  }, [userId]);

  const loadData = useCallback(async () => {
    if (!userId) return;
    setIsLoading(true);

    try {
        //can be run parallel
      await Promise.all([fetchTranscations(), fetchSummary()]);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchTranscations, fetchSummary, userId]);
};
