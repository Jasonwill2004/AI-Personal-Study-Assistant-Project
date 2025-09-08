/**
 * Chain-of-Thought Prompting Demo Runner for AI Personal Study Assistant
 * 
 * This demo showcases the chain-of-thought prompting technique with real
 * educational scenarios, demonstrating explicit reasoning processes that
 * teach students not just what to think, but HOW to think systematically.
 * 
 * Run with: npm run demo:chain-of-thought
 */

const ChainOfThoughtPromptingSystem = require('./chain-of-thought-implementation.js');

/**
 * Comprehensive demo scenarios for chain-of-thought prompting
 */
const chainOfThoughtDemoScenarios = [
    {
        name: "Mathematics Problem Solving",
        description: "Teaching systematic mathematical reasoning",
        scenarios: [
            {
                subject: "mathematics",
                query: "Factor the polynomial 2x² + 7x + 3 completely",
                level: "10th Grade Algebra",
                expectedSkills: ["analysis", "application"],
                difficulty: "intermediate"
            },
            {
                subject: "mathematics", 
                query: "A ball is thrown upward with initial velocity of 20 m/s. When will it reach maximum height?",
                level: "11th Grade Physics-Math",
                expectedSkills: ["analysis", "application", "interpretation"],
                difficulty: "advanced"
            },
            {
                subject: "mathematics",
                query: "Prove that the sum of angles in any triangle equals 180 degrees",
                level: "9th Grade Geometry",
                expectedSkills: ["analysis", "evaluation", "inference"],
                difficulty: "advanced"
            }
        ]
    },
    {
        name: "Scientific Reasoning",
        description: "Demonstrating scientific thinking processes",
        scenarios: [
            {
                subject: "science",
                query: "Explain how photosynthesis converts sunlight into chemical energy",
                level: "8th Grade Biology",
                expectedSkills: ["analysis", "interpretation", "synthesis"],
                difficulty: "intermediate"
            },
            {
                subject: "science",
                query: "Why do objects of different masses fall at the same rate in a vacuum?", 
                level: "10th Grade Physics",
                expectedSkills: ["analysis", "evaluation", "explanation"],
                difficulty: "advanced"
            },
            {
                subject: "science",
                query: "How does the greenhouse effect work and why is it important for Earth?",
                level: "7th Grade Earth Science",
                expectedSkills: ["analysis", "interpretation", "evaluation"],
                difficulty: "intermediate"
            }
        ]
    },
    {
        name: "Literary Analysis",
        description: "Teaching critical thinking through literature",
        scenarios: [
            {
                subject: "literature",
                query: "Analyze the symbolism of the green light in The Great Gatsby",
                level: "11th Grade English",
                expectedSkills: ["analysis", "interpretation", "evaluation"],
                difficulty: "advanced"
            },
            {
                subject: "literature",
                query: "Compare the themes of revenge in Hamlet and The Count of Monte Cristo",
                level: "12th Grade AP Literature",
                expectedSkills: ["analysis", "synthesis", "evaluation"],
                difficulty: "expert"
            },
            {
                subject: "literature",
                query: "How does the narrator's point of view affect our understanding of events in To Kill a Mockingbird?",
                level: "9th Grade English",
                expectedSkills: ["analysis", "interpretation", "evaluation"],
                difficulty: "intermediate"
            }
        ]
    }
];

/**
 * Performance benchmark scenarios for testing efficiency and correctness
 */
const benchmarkScenarios = [
    {
        name: "Speed Test - Simple Query",
        subject: "mathematics",
        query: "Solve for x: 3x + 7 = 22",
        level: "8th Grade",
        expectedTime: 1000, // Target <1 second for simple queries
        iterations: 5
    },
    {
        name: "Speed Test - Complex Query", 
        subject: "science",
        query: "Explain the complete process of cellular respiration including all three stages",
        level: "AP Biology",
        expectedTime: 1800, // Target <1.8 seconds for complex queries
        iterations: 3
    },
    {
        name: "Reasoning Chain Quality",
        subject: "literature",
        query: "Analyze the use of irony in O. Henry's 'The Gift of the Magi'",
        level: "10th Grade",
        minReasoningSteps: 5,
        qualityThreshold: 85
    }
];

class ChainOfThoughtDemo {
    constructor() {
        this.cotSystem = new ChainOfThoughtPromptingSystem();
        this.demoResults = {
            totalScenarios: 0,
            successfulGenerations: 0,
            averageResponseTime: 0,
            averageReasoningSteps: 0,
            averageQualityScore: 0,
            skillsDeveloped: new Set(),
            frameworksUsed: new Set()
        };
    }

    /**
     * Run comprehensive chain-of-thought prompting demonstration
     */
    async runDemo() {
        console.log("🧠 CHAIN-OF-THOUGHT PROMPTING SYSTEM DEMONSTRATION");
        console.log("=".repeat(65));
        console.log("Demonstrating explicit reasoning processes that teach HOW to think");
        console.log();

        // Show available reasoning frameworks
        this.displayAvailableFrameworks();
        
        // Run scenario demonstrations
        for (const category of chainOfThoughtDemoScenarios) {
            await this.runScenarioCategory(category);
        }
        
        // Run performance benchmarks
        await this.runPerformanceBenchmarks();
        
        // Show thinking skills development
        this.displayThinkingSkillsDevelopment();
        
        // Display comprehensive results
        this.displayDemoResults();
        
        // Show real-world applications
        this.displayRealWorldApplications();
    }

    /**
     * Display available reasoning frameworks
     */
    displayAvailableFrameworks() {
        console.log("🔧 AVAILABLE REASONING FRAMEWORKS:");
        console.log("-".repeat(40));
        
        const frameworks = this.cotSystem.getAvailableFrameworks();
        frameworks.forEach(framework => {
            console.log(`📚 ${framework.subject.toUpperCase()}: ${framework.reasoningSteps} steps`);
            console.log(`   Steps: ${framework.stepTypes.join(' → ')}`);
        });
        
        const skillsInfo = this.cotSystem.getThinkingSkillsInfo();
        console.log(`\n🧠 Thinking Skills: ${skillsInfo.totalSkillComponents} components`);
        console.log(`📊 Bloom Taxonomy: ${skillsInfo.bloomTaxonomy.levels.length} cognitive levels`);
        console.log();
    }

    /**
     * Run demonstration for a category of scenarios
     * @param {Object} category - Scenario category
     */
    async runScenarioCategory(category) {
        console.log(`📖 ${category.name.toUpperCase()}`);
        console.log(`💡 ${category.description}`);
        console.log("-".repeat(50));
        
        for (const scenario of category.scenarios) {
            await this.runSingleScenario(scenario);
        }
        
        console.log();
    }

    /**
     * Run a single chain-of-thought scenario
     * @param {Object} scenario - Individual scenario
     */
    async runSingleScenario(scenario) {
        this.demoResults.totalScenarios++;
        
        console.log(`\n🎯 ${scenario.subject.toUpperCase()} - ${scenario.level}`);
        console.log(`❓ Query: "${scenario.query}"`);
        console.log(`🎖️ Difficulty: ${scenario.difficulty}`);
        console.log(`🧠 Expected Skills: ${scenario.expectedSkills.join(', ')}`);
        
        const startTime = Date.now();
        const result = this.cotSystem.generateChainOfThoughtPrompt(
            scenario.subject,
            scenario.query,
            scenario.level
        );
        const endTime = Date.now();
        
        if (result.error) {
            console.log(`❌ Error: ${result.error}`);
            return;
        }
        
        // Validate reasoning chain
        const validation = this.cotSystem.validateReasoningChain(result.prompt, scenario.subject);
        
        console.log(`⚡ Response Time: ${endTime - startTime}ms`);
        console.log(`📏 Reasoning Steps: ${result.metadata.reasoningSteps}`);
        console.log(`🎯 Complexity Level: ${result.metadata.complexityLevel}`);
        console.log(`🏗️ Scaffolding: ${result.metadata.metacognitiveScaffolding}`);
        console.log(`✅ Chain Quality: ${validation.quality}%`);
        console.log(`📝 Token Estimate: ${result.metadata.tokenEstimate}`);
        
        // Show reasoning chain preview
        console.log("\n📋 REASONING CHAIN PREVIEW:");
        const previewLines = result.prompt.split('\n').slice(0, 8);
        previewLines.forEach(line => {
            if (line.trim()) console.log(`   ${line.trim()}`);
        });
        console.log("   ... [Full reasoning chain continues with explicit thinking steps]");
        
        // Update aggregated results
        this.updateDemoResults(result, validation, endTime - startTime);
        
        // Track skills developed
        scenario.expectedSkills.forEach(skill => this.demoResults.skillsDeveloped.add(skill));
        this.demoResults.frameworksUsed.add(scenario.subject);
        
        if (validation.isValid) {
            this.demoResults.successfulGenerations++;
        }
    }

    /**
     * Run performance benchmark tests
     */
    async runPerformanceBenchmarks() {
        console.log("⚡ PERFORMANCE BENCHMARKS");
        console.log("-".repeat(35));
        
        for (const benchmark of benchmarkScenarios) {
            console.log(`\n🏃 ${benchmark.name}`);
            
            if (benchmark.iterations) {
                // Speed test
                const times = [];
                for (let i = 0; i < benchmark.iterations; i++) {
                    const startTime = Date.now();
                    const result = this.cotSystem.generateChainOfThoughtPrompt(
                        benchmark.subject,
                        benchmark.query,
                        benchmark.level
                    );
                    const endTime = Date.now();
                    times.push(endTime - startTime);
                }
                
                const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
                const passed = avgTime < benchmark.expectedTime;
                
                console.log(`   Average Time: ${avgTime.toFixed(1)}ms`);
                console.log(`   Target: <${benchmark.expectedTime}ms`);
                console.log(`   Status: ${passed ? '✅ PASSED' : '❌ FAILED'}`);
                
            } else if (benchmark.minReasoningSteps) {
                // Quality test
                const result = this.cotSystem.generateChainOfThoughtPrompt(
                    benchmark.subject,
                    benchmark.query,
                    benchmark.level
                );
                
                if (!result.error) {
                    const validation = this.cotSystem.validateReasoningChain(result.prompt, benchmark.subject);
                    const stepsPass = result.metadata.reasoningSteps >= benchmark.minReasoningSteps;
                    const qualityPass = validation.quality >= benchmark.qualityThreshold;
                    
                    console.log(`   Reasoning Steps: ${result.metadata.reasoningSteps} (min: ${benchmark.minReasoningSteps})`);
                    console.log(`   Quality Score: ${validation.quality}% (min: ${benchmark.qualityThreshold}%)`);
                    console.log(`   Status: ${stepsPass && qualityPass ? '✅ PASSED' : '❌ FAILED'}`);
                }
            }
        }
        console.log();
    }

    /**
     * Display thinking skills development information
     */
    displayThinkingSkillsDevelopment() {
        console.log("🧠 THINKING SKILLS DEVELOPMENT");
        console.log("-".repeat(40));
        
        const skillsInfo = this.cotSystem.getThinkingSkillsInfo();
        
        console.log("📊 Bloom's Taxonomy Integration:");
        skillsInfo.bloomTaxonomy.levels.forEach((level, index) => {
            const pattern = skillsInfo.bloomTaxonomy.reasoning_patterns[level];
            console.log(`   ${index + 1}. ${level.toUpperCase()}: ${pattern}`);
        });
        
        console.log("\n🎯 Critical Thinking Components:");
        Object.entries(skillsInfo.criticalThinking.reasoning_patterns).forEach(([component, description]) => {
            console.log(`   • ${component.toUpperCase()}: ${description}`);
        });
        
        console.log("\n🔧 Problem-Solving Process:");
        Object.entries(skillsInfo.problemSolving.reasoning_patterns).forEach(([step, description]) => {
            console.log(`   → ${step.toUpperCase()}: ${description}`);
        });
        
        console.log();
    }

    /**
     * Update aggregated demo results
     * @param {Object} result - Generation result
     * @param {Object} validation - Validation result
     * @param {number} responseTime - Response time
     */
    updateDemoResults(result, validation, responseTime) {
        if (!result.error) {
            const currentAvgTime = this.demoResults.averageResponseTime;
            const currentAvgSteps = this.demoResults.averageReasoningSteps;
            const currentAvgQuality = this.demoResults.averageQualityScore;
            const count = this.demoResults.totalScenarios;
            
            this.demoResults.averageResponseTime = 
                (currentAvgTime * (count - 1) + responseTime) / count;
            this.demoResults.averageReasoningSteps = 
                (currentAvgSteps * (count - 1) + result.metadata.reasoningSteps) / count;
            this.demoResults.averageQualityScore = 
                (currentAvgQuality * (count - 1) + validation.quality) / count;
        }
    }

    /**
     * Display comprehensive demo results
     */
    displayDemoResults() {
        console.log("📊 DEMONSTRATION RESULTS SUMMARY");
        console.log("=".repeat(45));
        
        const metrics = this.cotSystem.getPerformanceMetrics();
        const successRate = (this.demoResults.successfulGenerations / this.demoResults.totalScenarios) * 100;
        
        console.log("🎯 PERFORMANCE METRICS:");
        console.log(`   Scenarios Tested: ${this.demoResults.totalScenarios}`);
        console.log(`   Success Rate: ${successRate.toFixed(1)}%`);
        console.log(`   Average Response Time: ${this.demoResults.averageResponseTime.toFixed(1)}ms`);
        console.log(`   Average Reasoning Steps: ${this.demoResults.averageReasoningSteps.toFixed(1)}`);
        console.log(`   Average Quality Score: ${this.demoResults.averageQualityScore.toFixed(1)}%`);
        
        console.log("\n🏆 RUBRIC COMPLIANCE:");
        console.log(`   Correctness: ${metrics.correctnessScore.toFixed(1)}% (Target: >99.8%)`);
        console.log(`   Efficiency: ${this.demoResults.averageResponseTime.toFixed(1)}ms (Target: <2000ms)`);
        console.log(`   Scalability: ${metrics.scalabilityScore}% (Target: 1000+ users)`);
        console.log(`   Reasoning Quality: ${metrics.reasoningChainQuality}%`);
        console.log(`   Metacognitive Development: ${metrics.metacognitiveEffectiveness}%`);
        console.log(`   Thinking Skill Development: ${metrics.thinkingSkillDevelopment}%`);
        
        console.log("\n🧠 EDUCATIONAL IMPACT:");
        console.log(`   Thinking Skills Developed: ${Array.from(this.demoResults.skillsDeveloped).join(', ')}`);
        console.log(`   Subject Frameworks Used: ${Array.from(this.demoResults.frameworksUsed).join(', ')}`);
        console.log(`   Cognitive Complexity Levels: 4 (basic to expert)`);
        console.log(`   Metacognitive Scaffolding: Adaptive based on student level`);
        
        // Status determination
        const meetsCorrectness = metrics.correctnessScore > 99.8;
        const meetsEfficiency = this.demoResults.averageResponseTime < 2000;
        const meetsScalability = metrics.scalabilityScore > 95;
        
        console.log("\n✅ RUBRIC STATUS:");
        console.log(`   Correctness: ${meetsCorrectness ? '✅ PASSED' : '❌ FAILED'}`);
        console.log(`   Efficiency: ${meetsEfficiency ? '✅ PASSED' : '❌ FAILED'}`);
        console.log(`   Scalability: ${meetsScalability ? '✅ PASSED' : '❌ FAILED'}`);
        
        const overallPass = meetsCorrectness && meetsEfficiency && meetsScalability;
        console.log(`   Overall: ${overallPass ? '🎉 ALL TARGETS MET' : '⚠️ NEEDS IMPROVEMENT'}`);
        
        console.log();
    }

    /**
     * Display real-world applications
     */
    displayRealWorldApplications() {
        console.log("🌍 REAL-WORLD APPLICATIONS");
        console.log("-".repeat(35));
        
        const applications = [
            {
                domain: "Education",
                use: "Teaching explicit reasoning in STEM subjects",
                benefit: "Students learn thinking processes, not just answers"
            },
            {
                domain: "Tutoring",
                use: "AI tutors that model expert thinking",
                benefit: "Personalized metacognitive skill development"
            },
            {
                domain: "Assessment",
                use: "Evaluating student reasoning quality",
                benefit: "Focus on process over product in evaluation"
            },
            {
                domain: "Curriculum Design",
                use: "Scaffolding complex problem-solving skills",
                benefit: "Systematic thinking skill progression"
            },
            {
                domain: "Professional Development",
                use: "Training teachers in explicit instruction",
                benefit: "Enhanced pedagogical content knowledge"
            }
        ];
        
        applications.forEach(app => {
            console.log(`🎯 ${app.domain}:`);
            console.log(`   Use: ${app.use}`);
            console.log(`   Benefit: ${app.benefit}`);
            console.log();
        });
        
        console.log("🚀 EDUCATIONAL TRANSFORMATION:");
        console.log("   Chain-of-thought prompting transforms AI from answer-provider");
        console.log("   to thinking-teacher, developing metacognitive skills that");
        console.log("   transfer across subjects and real-world problem solving.");
        console.log();
    }
}

// Main demo execution
if (require.main === module) {
    const demo = new ChainOfThoughtDemo();
    
    console.log("Starting Chain-of-Thought Prompting Demonstration...\n");
    
    demo.runDemo().then(() => {
        console.log("🎉 CHAIN-OF-THOUGHT DEMONSTRATION COMPLETE!");
        console.log("Key Achievement: Teaching students HOW to think, not just WHAT to think");
        console.log("Educational Impact: Metacognitive skill development for lifelong learning");
        console.log("\nRun again with: npm run demo:chain-of-thought");
    }).catch(error => {
        console.error("Demo error:", error);
        process.exit(1);
    });
}

module.exports = ChainOfThoughtDemo;
