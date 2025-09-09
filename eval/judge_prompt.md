# Judge Prompt for AI Personal Study Assistant Evaluation

## Overview
This judge prompt is designed to evaluate the output quality of different prompting techniques in educational AI systems. The evaluation considers multiple dimensions of educational effectiveness, technical performance, and pedagogical quality.

## Evaluation Framework

### Core Evaluation Parameters

#### 1. Correctness (Weight: 35%)
**Parameters Considered:**
- **Factual Accuracy**: Are the facts, formulas, and information correct?
- **Conceptual Understanding**: Does the response demonstrate proper understanding of the subject matter?
- **Problem-Solving Accuracy**: Are mathematical calculations, scientific explanations, and literary analyses correct?
- **Completeness**: Does the response address all aspects of the query?
- **Precision**: Is the information specific and detailed rather than vague?

**Scoring Criteria:**
- 90-100: Perfect accuracy with complete conceptual understanding
- 80-89: Mostly accurate with minor errors or omissions
- 70-79: Generally correct but with some significant gaps
- 60-69: Partially correct with notable errors
- Below 60: Major inaccuracies or fundamental misunderstandings

#### 2. Educational Quality (Weight: 30%)
**Parameters Considered:**
- **Pedagogical Effectiveness**: Does the response teach effectively?
- **Age-Appropriate Language**: Is the explanation suitable for the stated grade level?
- **Learning Engagement**: Would this response engage and motivate students?
- **Clarity and Organization**: Is the information presented clearly and logically?
- **Scaffolding Quality**: Does it build understanding progressively?

**Scoring Criteria:**
- 90-100: Excellent teaching quality, highly engaging and appropriate
- 80-89: Good educational value with effective explanations
- 70-79: Adequate teaching with room for improvement
- 60-69: Basic educational value but lacks engagement
- Below 60: Poor teaching quality or inappropriate level

#### 3. Technique Adherence (Weight: 20%)
**Parameters Considered:**
- **Zero-Shot**: Direct, expert-level response without examples
- **One-Shot**: Consistent format replication from provided example
- **Multi-Shot**: Appropriate method selection from multiple approaches
- **Dynamic**: Personalization based on user context and adaptation
- **Chain-of-Thought**: Explicit reasoning steps and thinking process

**Scoring Criteria:**
- 90-100: Perfect implementation of the prompting technique
- 80-89: Good adherence with minor deviations
- 70-79: Adequate implementation with some inconsistencies
- 60-69: Partial adherence with notable gaps
- Below 60: Poor implementation or technique misunderstanding

#### 4. Efficiency (Weight: 10%)
**Parameters Considered:**
- **Response Time**: Does it meet the performance targets?
- **Token Efficiency**: Optimal length without unnecessary verbosity
- **Processing Efficiency**: Computational resource optimization
- **Scalability Indicators**: Evidence of scalable performance

**Scoring Criteria:**
- 90-100: Meets all efficiency targets with optimal performance
- 80-89: Good performance with minor efficiency issues
- 70-79: Adequate performance meeting basic requirements
- 60-69: Below-target performance with noticeable delays
- Below 60: Poor performance failing to meet standards

#### 5. Innovation and Insight (Weight: 5%)
**Parameters Considered:**
- **Creative Explanations**: Novel and engaging teaching approaches
- **Deep Insights**: Goes beyond basic requirements to provide valuable insights
- **Real-World Connections**: Links concepts to practical applications
- **Critical Thinking**: Encourages analytical and evaluative thinking

## Judge Prompt Template

```
You are an expert educational evaluator assessing AI-generated responses for educational quality and effectiveness. 

EVALUATION TASK:
Evaluate the following AI response against the expected output criteria using the comprehensive framework below.

TECHNIQUE: {technique}
SUBJECT: {subject}
STUDENT LEVEL: {level}
QUERY: "{query}"

EXPECTED OUTPUT CRITERIA:
{expected_output}

AI RESPONSE TO EVALUATE:
{ai_response}

EVALUATION FRAMEWORK:

1. CORRECTNESS ANALYSIS (35% weight):
   - Factual accuracy assessment
   - Conceptual understanding evaluation
   - Problem-solving correctness
   - Completeness and precision check
   Score: __/100 | Reasoning: 

2. EDUCATIONAL QUALITY ANALYSIS (30% weight):
   - Pedagogical effectiveness evaluation
   - Age-appropriateness assessment
   - Learning engagement potential
   - Clarity and organization review
   Score: __/100 | Reasoning:

3. TECHNIQUE ADHERENCE ANALYSIS (20% weight):
   - {technique} implementation quality
   - Consistency with technique requirements
   - Format and structure compliance
   - Method execution effectiveness
   Score: __/100 | Reasoning:

4. EFFICIENCY ANALYSIS (10% weight):
   - Response time consideration (target: {max_response_time}ms)
   - Token efficiency evaluation
   - Content optimization assessment
   - Scalability indicators
   Score: __/100 | Reasoning:

5. INNOVATION AND INSIGHT ANALYSIS (5% weight):
   - Creative teaching approaches
   - Deep educational insights
   - Real-world connections
   - Critical thinking encouragement
   Score: __/100 | Reasoning:

OVERALL EVALUATION:
Weighted Score: [Correctness×0.35 + Educational×0.30 + Technique×0.20 + Efficiency×0.10 + Innovation×0.05]

PASS/FAIL DETERMINATION:
- PASS: Overall score ≥ 85 AND Correctness ≥ 90 AND Educational Quality ≥ 80
- FAIL: Overall score < 85 OR Correctness < 90 OR Educational Quality < 80

RESULT: PASS/FAIL
OVERALL SCORE: __/100

SPECIFIC FEEDBACK:
Strengths:
1. 
2. 
3. 

Areas for Improvement:
1. 
2. 
3. 

RECOMMENDATION:
[Specific suggestions for improvement or validation of excellence]
```

## Parameter Justification

### Why These Parameters Were Selected:

#### Correctness (35% - Highest Weight)
Educational AI must be factually accurate. Incorrect information can harm learning and undermine trust. This is the foundation of educational value.

#### Educational Quality (30% - Second Highest)
The primary purpose is education. Response must be pedagogically sound, engaging, and appropriate for the learner's level.

#### Technique Adherence (20%)
Each prompting technique has specific characteristics. Proper implementation ensures the intended benefits of each approach.

#### Efficiency (10%)
Important for scalability and user experience, but secondary to educational value and correctness.

#### Innovation (5%)
Encourages creative and insightful responses that go beyond basic requirements, but not essential for core functionality.

### Multi-Dimensional Scoring Rationale:

1. **Prevents Single-Point Failures**: A response can't pass with high scores in some areas while failing critically in others
2. **Balances Technical and Educational**: Ensures both technical implementation and educational value are considered
3. **Accounts for Context**: Different techniques and subjects may excel in different areas
4. **Provides Actionable Feedback**: Detailed scoring helps identify specific improvement areas
5. **Maintains High Standards**: 85+ overall with 90+ correctness ensures educational quality

### Quality Assurance Features:

- **Multiple Evaluation Angles**: Prevents bias toward any single aspect
- **Contextual Adaptation**: Criteria adjust based on technique, subject, and level
- **Threshold Requirements**: Minimum standards for critical areas (correctness, educational quality)
- **Constructive Feedback**: Specific suggestions for improvement
- **Scalable Framework**: Can handle large-scale evaluation consistently

This comprehensive evaluation framework ensures that AI responses meet high educational standards while properly implementing their intended prompting techniques.
